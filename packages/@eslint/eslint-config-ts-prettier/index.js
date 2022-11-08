const { tsPrettierRules } = require("@amollo-lint/prettier-rules");

module.exports = {
    "root": true,
    "extends": [
        "@amollo-lint/eslint-config-ts",
        "plugin:prettier/recommended", // eslint-plugin-prettier
    ],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": ["error", tsPrettierRules],
    },
};
