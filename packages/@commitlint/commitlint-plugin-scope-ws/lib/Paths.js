const { readdirSync, existsSync } = require("fs");
const { realpathSync } = require("fs");
const { resolve, join } = require("path");

class Paths {
    constructor() {
        this._setWsRootPath();
        this._setWsRootPkgPath();
    }

    /**
     * @param {string} source - directory path
     * @param {{ isAbsolutePath: boolean }} options
     * @returns {string[]}
     */
    getDirectoriesName(source, options = {}) {
        return readdirSync(source, { "withFileTypes": true })
            .filter(
                dirent => dirent.isDirectory() && !dirent.name.startsWith("@")
            )
            .map(dirent => {
                if (options?.isAbsolutePath) {
                    return join(source, dirent.name);
                }

                return dirent.name;
            });
    }

    _setWsRootPath() {
        this.wsRootPath = realpathSync(process.cwd());
    }

    _setWsRootPkgPath() {
        this.wsRootPkgPath = resolve(this.wsRootPath, "package.json");
    }

    /**
     * @param {string} path directory path
     * @returns {boolean}
     */
    hasPkg(path) {
        const pathPkg = join(path, "package.json");

        return existsSync(pathPkg);
    }
}

module.exports = Paths;
