const rules = require("./rules");

module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "es2017": true,
        "es2020": true,
        "node": true,
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
    },
    "ignorePatterns": [
        "node_modules",
        ".git",
        ".cache",
        ".yarn",
        ".idea",
        ".vscode"
    ],
    rules,
};
