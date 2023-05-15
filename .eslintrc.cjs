module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		// "prettier/@typescript-eslint",
		"plugin:import/typescript",
		"plugin:import/recommended"
		// "prettier"
	],
	plugins: ["@typescript-eslint", "unused-imports"],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"unused-imports/no-unused-imports": "warn",
		"import/no-unresolved": "off",
		"import/order": [
			"warn",
			{
				groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true
				}
			}
		],
		// "prettier/prettier": ["error", { endOfLine: "auto" }],
		"spaced-comment": [
			"error",
			"always",
			{
				block: {
					markers: ["!"],
					exceptions: ["*"],
					balanced: true
				}
			}
		],
		"no-mixed-spaces-and-tabs": "error"
	}
};
