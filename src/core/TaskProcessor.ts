import defined from "../utils/defined.js";
import { destroyObject } from "../utils/destroyObject.js";
/**
 * A wrapper around a web worker that allows scheduling tasks for a given worker,
 * returning results asynchronously via a promise.
 *
 * The Worker is not constructed until a task is scheduled.
 *
 * @alias TaskProcessor
 * @constructor
 *
 * @param {String} workerPath The Url to the worker. This can either be an absolute path or relative to the Cesium Workers folder.
 * @param {Number} [maximumActiveTasks=Number.POSITIVE_INFINITY] The maximum number of active tasks.  Once exceeded,
 *                                        scheduleTask will not queue any more tasks, allowing
 *                                        work to be rescheduled in future frames.
 */
class TaskProcessor {
	static _canTransferArrayBuffer = undefined;
	private _workerPath: URL;
	private _maximumActiveTasks: number;
	private _activeTasks: number;
	private _deferreds: any;
	private _nextID: number;
	private _worker: Worker;
	constructor(workerPath, maximumActiveTasks) {
		this._workerPath = workerPath;
		this._maximumActiveTasks = maximumActiveTasks || Number.POSITIVE_INFINITY;
		this._activeTasks = 0;
		this._deferreds = {};
		this._nextID = 0;
	}
	/**
	 * Schedule a task to be processed by the web worker asynchronously.  If there are currently more
	 * tasks active than the maximum set by the constructor, will immediately return undefined.
	 * Otherwise, returns a promise that will resolve to the result posted back by the worker when
	 * finished.
	 *
	 * @param {Object} parameters Any input data that will be posted to the worker.
	 * @param {Object[]} [transferableObjects] An array of objects contained in parameters that should be
	 *                                      transferred to the worker instead of copied.
	 * @returns {Promise.<Object>|undefined} Either a promise that will resolve to the result when available, or undefined
	 *                    if there are too many active tasks,
	 *
	 * @example
	 * const taskProcessor = new TaskProcessor('myWorkerPath');
	 * const promise = taskProcessor.scheduleTask({
	 *     someParameter : true,
	 *     another : 'hello'
	 * });
	 * if (!defined(promise)) {
	 *     // too many active tasks - try again later
	 * } else {
	 *     promise.then(function(result) {
	 *         // use the result of the task
	 *     });
	 * }
	 */
	scheduleTask(parameters, transferableObjects) {
		if (!defined(this._worker)) {
			this._worker = createWorker(this);
		}

		if (this._activeTasks >= this._maximumActiveTasks) {
			return undefined;
		}

		++this._activeTasks;
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const processor = this;
		return Promise.resolve(canTransferArrayBuffer()).then(function (canTransferArrayBuffer) {
			if (!defined(transferableObjects)) {
				transferableObjects = emptyTransferableObjectArray;
			} else if (!canTransferArrayBuffer) {
				transferableObjects.length = 0;
			}

			const id = processor._nextID++;
			const deferred = defer();
			processor._deferreds[id] = deferred;

			processor._worker.postMessage(
				{
					id: id,
					parameters: parameters,
					canTransferArrayBuffer: canTransferArrayBuffer
				},
				transferableObjects
			);

			return deferred.promise;
		});
	}
	/**
	 * Posts a message to a web worker with configuration to initialize loading
	 * and compiling a web assembly module asychronously, as well as an optional
	 * fallback JavaScript module to use if Web Assembly is not supported.
	 *
	 * @param {Object} [webAssemblyOptions] An object with the following properties:
	 * @param {String} [webAssemblyOptions.modulePath] The path of the web assembly JavaScript wrapper module.
	 * @param {String} [webAssemblyOptions.wasmBinaryFile] The path of the web assembly binary file.
	 * @param {String} [webAssemblyOptions.fallbackModulePath] The path of the fallback JavaScript module to use if web assembly is not supported.
	 * @returns {Promise.<Object>} A promise that resolves to the result when the web worker has loaded and compiled the web assembly module and is ready to process tasks.
	 */
	initWebAssemblyModule(webAssemblyOptions) {
		if (!defined(this._worker)) {
			this._worker = createWorker(this);
		}

		const deferred = defer();
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const processor = this;
		const worker = this._worker;
		getWebAssemblyLoaderConfig(this, webAssemblyOptions).then(function (wasmConfig) {
			return Promise.resolve(canTransferArrayBuffer()).then(function (canTransferArrayBuffer) {
				let transferableObjects;
				const binary = wasmConfig.wasmBinary;
				if (defined(binary) && canTransferArrayBuffer) {
					transferableObjects = [binary];
				}

				worker.onmessage = function (event) {
					worker.onmessage = function (event) {
						completeTask(processor, event.data);
					};

					deferred.resolve(event.data);
				};

				worker.postMessage({ webAssemblyConfig: wasmConfig }, transferableObjects);
			});
		});

		return deferred.promise;
	}

	/**
	 * Destroys this object.  This will immediately terminate the Worker.
	 * <br /><br />
	 * Once an object is destroyed, it should not be used; calling any function other than
	 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.
	 */
	destroy() {
		if (defined(this._worker)) {
			this._worker.terminate();
		}
		return destroyObject(this);
	}
}

/**
 * An event that's raised when a task is completed successfully.  Event handlers are passed
 * the error object is a task fails.
 *
 * @type {Event}
 *
 * @private
 */
const emptyTransferableObjectArray = [];
/**
 * An object which contains a promise object, and functions to resolve or reject the promise.
 *
 * @typedef {Object} defer.deferred
 * @property {defer.resolve} resolve Resolves the promise when called.
 * @property {defer.reject} reject Rejects the promise when called.
 * @property {Promise} promise Promise object.
 */

/**
 * Creates a deferred object, containing a promise object, and functions to resolve or reject the promise.
 * @returns {defer.deferred}
 * @private
 */
function defer() {
	let resolve;
	let reject;
	const promise = new Promise(function (res, rej) {
		resolve = res;
		reject = rej;
	});

	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}
function requestWasmFile(url) {
	fetch(url, {
		method: "get",
		// @ts-ignore
		responseType: "arraybuffer"
	}).then((res) => {
		return res.arrayBuffer();
	});
}
function canTransferArrayBuffer() {
	if (!defined(TaskProcessor._canTransferArrayBuffer)) {
		const worker = new Worker(new URL("@/Core/TransferTypedArrayTest.js", import.meta.url), {
			type: "module"
		});
		// @ts-ignore
		worker.postMessage = worker.webkitPostMessage || worker.postMessage;

		const value = 99;
		const array = new Int8Array([value]);

		try {
			// postMessage might fail with a DataCloneError
			// if transferring array buffers is not supported.
			worker.postMessage(
				{
					array: array
				},
				[array.buffer]
			);
		} catch (e) {
			TaskProcessor._canTransferArrayBuffer = false;
			return TaskProcessor._canTransferArrayBuffer;
		}

		const deferred = defer();

		worker.onmessage = function (event) {
			const array = event.data.array;

			// some versions of Firefox silently fail to transfer typed arrays.
			// https://bugzilla.mozilla.org/show_bug.cgi?id=841904
			// Check to make sure the value round-trips successfully.
			const result = defined(array) && array[0] === value;
			deferred.resolve(result);

			worker.terminate();

			TaskProcessor._canTransferArrayBuffer = result;
		};

		TaskProcessor._canTransferArrayBuffer = deferred.promise;
	}

	return TaskProcessor._canTransferArrayBuffer;
}

function completeTask(processor, data) {
	--processor._activeTasks;

	const id = data.id;
	if (!defined(id)) {
		// This is not one of ours.
		return;
	}

	const deferreds = processor._deferreds;
	const deferred = deferreds[id];

	if (defined(data.error)) {
		const error = data.error;
		if (error.name === "RuntimeError") {
			throw new Error(data.error.message);
			//   error = new RuntimeError(data.error.message);
			//   error.stack = data.error.stack;
		} else if (error.name === "DeveloperError") {
			throw new Error(data.error.message);
			//   error = new DeveloperError(data.error.message);
			//   error.stack = data.error.stack;
		}
		// TaskProcessor.taskCompletedEvent.raiseEvent(error);
		deferred.reject(error);
	} else {
		// TaskProcessor.taskCompletedEvent.raiseEvent();
		deferred.resolve(data.result);
	}

	delete deferreds[id];
}

function createWorker(processor) {
	const worker = new Worker(processor._workerPath, { type: "module" });
	// @ts-ignore
	worker.postMessage = worker?.webkitPostMessage || worker.postMessage;
	worker.onmessage = function (event) {
		completeTask(processor, event.data);
	};

	return worker;
}

function getWebAssemblyLoaderConfig(processor, wasmOptions) {
	const config = {
		modulePath: undefined,
		wasmBinaryFile: undefined,
		wasmBinary: undefined
	};
	const { modulePath, wasmBinaryFile, fallbackModulePath } = wasmOptions;
	// Web assembly not supported, use fallback js module if provided
	if (!(typeof WebAssembly !== "undefined")) {
		if (!fallbackModulePath)
			throw new Error(
				`This browser does not support Web Assembly, and no backup module was provided for ${processor._workerPath}`
			);

		config.modulePath = fallbackModulePath;
		return Promise.resolve(config);
	}

	config.modulePath = modulePath;
	config.wasmBinaryFile = wasmBinaryFile;
	// @ts-ignore
	return requestWasmFile(config.wasmBinaryFile).then(function (arrayBuffer) {
		config.wasmBinary = arrayBuffer;
		return config;
	});
}
export default TaskProcessor;
