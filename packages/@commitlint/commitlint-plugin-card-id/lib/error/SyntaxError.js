const Error = require("./Error");

class SyntaxError extends Error {
    constructor(message) {
        super(message);
        this.name = "SyntaxError";
    }
}

module.exports = SyntaxError;
