const env = require("./parts/env");
const parserOptions = require("./parts/parserOptions");
const rules = require("./parts/rules");
const ignorePatterns = require("./parts/ignorePatterns");

module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    env,
    parserOptions,
    ignorePatterns,
    rules,
};
