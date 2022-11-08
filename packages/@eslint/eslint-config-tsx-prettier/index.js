const { tsxPrettierRules } = require("@amollo-lint/prettier-rules");

module.exports = {
    "root": true,
    "extends": [
        "@amollo-lint/eslint-config-tsx",
        "plugin:prettier/recommended", // eslint-plugin-prettier
    ],
    "plugins": ["prettier"],
    "ignorePatterns": ["dist", "build"],
    "rules": {
        "prettier/prettier": ["error", tsxPrettierRules],
    },
};
