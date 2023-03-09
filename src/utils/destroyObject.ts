function returnTrue() {
	return true;
}
export function destroyObject(object) {
	// message =message||"This object was destroyed, i.e., destroy() was called.";

	function throwOnDestroyed() {
		throw new Error("This object was destroyed, i.e., destroy() was called.");
	}

	for (const key in object) {
		if (typeof object[key] === "function") {
			object[key] = throwOnDestroyed;
		}
	}

	object.isDestroyed = returnTrue;

	return undefined;
}
