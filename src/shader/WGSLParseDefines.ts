const preprocessorSymbols = /#([^\s]*)(\s*)/gm;
const defineRexg = /\b[0-9A-Z_]+\b/g;
export function WGSLParseDefines(shader, defines) {
	// filter "&&","||"
	const rexgDefines = shader.match(defineRexg)?.filter((define) => !["&&", "||"].includes(define));
	const normalizeDefines = rexgDefines.map((define) => defines[define]);
	let currentShaderStr = shader;
	const shaderStrs = rexgDefines?.map((define) => {
		const length = currentShaderStr.indexOf(define);
		const sliceStr = currentShaderStr.slice(0, length);
		currentShaderStr = currentShaderStr.slice(length + 1 + define.length);
		return sliceStr;
	});
	if (shaderStrs.length) shaderStrs.push(currentShaderStr);
	return shaderStrs.length > 0 ? ParseDefines(shaderStrs, normalizeDefines) : shader;
}
function ParseDefines(strings, values) {
	const stateStack = [];
	let state = { frag: "", elseIsValid: false, expression: true };
	let depth = 1;
	for (let i = 0; i < strings.length; ++i) {
		const frag = strings[i];
		const matchedSymbols = frag.matchAll(preprocessorSymbols);

		let lastIndex = 0;
		let valueConsumed = false;
		for (const match of matchedSymbols) {
			state.frag += frag.substring(lastIndex, match.index);

			switch (match[1]) {
				case "if":
					if (match.index + match[0].length != frag.length) {
						throw new Error("#if must be immediately followed by a template expression (ie: ${value})");
					}
					valueConsumed = true;
					stateStack.push(state);
					depth++;
					state = { frag: "", elseIsValid: true, expression: !!values[i] };
					break;
				case "elif":
					if (match.index + match[0].length != frag.length) {
						throw new Error("#elif must be immediately followed by a template expression (ie: ${value})");
					} else if (!state.elseIsValid) {
						throw new Error("#elif not preceeded by an #if or #elif");
					}
					valueConsumed = true;
					if (state.expression && stateStack.length != depth) {
						stateStack.push(state);
					}
					state = { frag: "", elseIsValid: true, expression: !!values[i] };
					break;
				case "else":
					if (!state.elseIsValid) {
						throw new Error("#else not preceeded by an #if or #elif");
					}
					if (state.expression && stateStack.length != depth) {
						stateStack.push(state);
					}
					state = { frag: match[2], elseIsValid: false, expression: true };
					break;
				case "endif":
					if (!stateStack.length) {
						throw new Error("#endif not preceeded by an #if");
					}
					// eslint-disable-next-line no-case-declarations
					const branchState = stateStack.length == depth ? stateStack.pop() : state;
					state = stateStack.pop();
					depth--;
					if (branchState.expression) {
						state.frag += branchState.frag;
					}
					state.frag += match[2];
					break;
				default:
					// Unknown preprocessor symbol. Emit it back into the output frag unchanged.
					state.frag += match[0];
					break;
			}

			lastIndex = match.index + match[0].length;
		}

		// If the frag didn't end on one of the preprocessor symbols append the rest of it here.
		if (lastIndex != frag.length) {
			state.frag += frag.substring(lastIndex, frag.length);
		}

		// If the next value wasn't consumed by the preprocessor symbol, append it here.
		if (!valueConsumed && values.length > i) {
			state.frag += values[i];
		}
	}
	if (stateStack.length) {
		throw new Error("Mismatched #if/#endif count");
	}
	return state.frag;
}
function ParseDefinesConst(shader: string, defines) {
	if (!defines) return shader;
	let result = shader;
	const constDefineKeys = Object.keys(defines)?.filter?.((key) => key != key.toUpperCase());
	constDefineKeys?.forEach?.((key: string) => {
		result = result.replaceAll(key, defines[key]);
	});
	return result;
}
function getNormalizeDefines(rexgDefines, defines) {
	return rexgDefines.map((define) => {
		if (define.includes("&&") || define.includes("||")) {
			let result;
			if (define.includes("&&")) {
				const splitDefines = define.split("&&");
				result =
					splitDefines.reduce((total, current) => {
						total += defines[current];
					}, 0) === splitDefines.length;
			} else {
				const splitDefines = define.split("||");
				result = !(
					splitDefines.reduce((total, current) => {
						total += defines[current];
					}, 0) === splitDefines.length
				);
			}
			return result;
		} else {
			return defines[define];
		}
	});
}
