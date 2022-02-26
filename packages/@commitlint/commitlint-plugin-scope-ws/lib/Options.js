class Options {
    /**
     * @param {{
     *  additionalScopes: Array<string> | string,
     * }} options
     */
    constructor(options) {
        if (Options.instance instanceof Options) {
            return Options.instance;
        }

        this._setAdditionalScopes(options.additionalScopes);

        Object.freeze(this);
        Options.instance = this;
    }

    _setAdditionalScopes(scopes = []) {
        if (!scopes && !Array.isArray(scopes) && typeof scopes !== "string")
            throw new Error(
                `additionalScopes: ${scopes} - must be of type array of strings or string`
            );

        this.additionalScopes = typeof scopes === "string" ? [scopes] : scopes;
    }
}

module.exports = Options;
