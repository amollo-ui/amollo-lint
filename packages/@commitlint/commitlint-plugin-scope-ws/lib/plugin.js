const WSScope = require("./WSScope");
const Options = require("./Options");

exports.scopeIncludeWorkspaces = (parsed, when, value) => {
    const { scope } = parsed;

    try {
        const options = new Options(value);
        const { wsNames } = new WSScope();
        const scopeNames = [...wsNames, ...options.additionalScopes];

        if (when === "never") {
            return [
                !scopeNames.includes(scope),
                `scope must not be one of [${scopeNames.join(", ")}]`,
            ];
        }

        return [
            scopeNames.includes(scope),
            `scope must be one of [${scopeNames.join(", ")}]`,
        ];
    } catch (err) {
        return [false, `${err.message}`];
    }
};
