const Error = require("./Error");

class ConfigError extends Error {
    constructor(message) {
        super(message + ". Please check your config file");
        this.name = "ConfigError";
    }
}

module.exports = ConfigError;
