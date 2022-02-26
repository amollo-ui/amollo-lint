const { generateTasks } = require("fast-glob");
const { resolve, parse, join } = require("path");
const Paths = require("./Paths");

class WSNames extends Paths {
    /**
     * @param {string} path - directory path
     * @returns {string | null} - package.json name if not found null
     */
    getDirectoryPkgName(path) {
        const isPkg = this.hasPkg(path);

        if (isPkg) {
            const pathPkg = join(path, "package.json");
            const pkg = require(pathPkg);
            return pkg.scopeCommitName ? pkg.scopeCommitName : pkg.name;
        }

        return null;
    }

    /**
     * @param {string} space
     * @returns {boolean}
     */
    isNestedWorkspace(space) {
        return parse(space).base.startsWith("@");
    }

    /**
     * @param {string} name
     * @returns {string} e.g "@wiki:design"
     */
    formatNestedPkgName(name) {
        return name.split("/").join(":");
    }

    /**
     * @returns {string} <root_dir>/package.json -> workspaces -> packages
     */
    get wsPackages() {
        return require(this.wsRootPkgPath).workspaces.packages;
    }

    /**
     * @description get path without asterisk character and workspace name
     * @returns {{ "base": string, "name": string }}
     */
    get wsGlob() {
        let globs = [];

        generateTasks(this.wsPackages).forEach(item => {
            const { base } = item;
            const name = base.substring(base.lastIndexOf("/") + 1);

            globs.push({ "base": resolve(this.wsRootPath, base), name });
        });

        return globs;
    }

    /**
     * @description get package names in workspace
     * @returns {string[]}
     */
    get wsNames() {
        let workspaces = [];

        this.wsGlob.forEach(pathItem => {
            const { "base": baseWS } = pathItem;
            const nestedPackages = this.getDirectoriesName(baseWS, {
                "isAbsolutePath": true,
            });

            nestedPackages.forEach(space => {
                const name = this.getDirectoryPkgName(space);

                if (name) {
                    workspaces.push(this.formatNestedPkgName(name));
                }
            });
        });

        return workspaces;
    }
}

module.exports = WSNames;
