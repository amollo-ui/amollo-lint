const rules = require("./rules");

module.exports = {
    "root": true,
    "extends": ["@amollo-lint/eslint-config-js"],
    "overrides": [
        {
            "files": ["*.{ts,tsx}"],
            "extends": [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            "parser": "@typescript-eslint/parser",
            "plugins": ["@typescript-eslint"],
            rules
        }
    ]
};
