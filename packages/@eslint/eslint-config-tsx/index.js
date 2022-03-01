module.exports = {
    "root": true,
    "extends": [
        "@amollo-lint/eslint-config-ts",
        "@amollo-lint/eslint-config-jsx",
    ],
    "rules": {
        "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
    }
};
