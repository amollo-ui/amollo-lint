const { scopeIncludeWorkspaces } = require("./lib/plugin");

module.exports = {
    "rules": {
        "scope-ws": scopeIncludeWorkspaces,
    },
};
