const preprocessorSymbols = /#([^\s]*)(\s*)/gm;
// Template literal tag that handles simple preprocessor symbols for WGSL
// shaders. Supports #if/elif/else/endif statements.
export function wgslParseDefines(strings, ...values) {
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
