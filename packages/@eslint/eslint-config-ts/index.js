const rules = require("./rules");

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "es2017": true,
        "es2020": true,
        "node": true,
    },
    "extends": [
        "@amollo-lint/eslint-config-js",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "plugins": ["@typescript-eslint"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
	},
    "overrides": [
        {
            "files": ["*.ts"],
            "parserOptions": {
                "project": "tsconfig.json",
                "tsconfigRootDir": __dirname,
            },
            rules
        }
    ]
};
