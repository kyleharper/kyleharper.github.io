import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"no-console": "error",
			"prefer-const": "off",
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
	prettierConfig,
);
