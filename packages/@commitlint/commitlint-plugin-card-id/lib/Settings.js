/* eslint-disable max-lines */
const ConfigError = require("./error/ConfigError");
const { getBorderCouple } = require("./helpers/borderCouple");
const { isInstanceObject } = require("./utils/isInstanceObject");

/**
 * @throws {ConfigError}
 */
class Settings {
    /**
     * @param {{
     *  position: "start" | "end",
     *  ignoreTypes: Array<string> | string,
     *  prefixId: string | boolean,
     *  borderType: [string, string] | string,
     *  minLengthId: number,
     *  required: boolean,
     *  spaceBeforeAfter: "before" | "after" | "both" | "never",
     *  log: {
     *    message: string,
     *    onlyId: boolean,
     *    pattern: string,
     *  },
     *  idMatch: RegExp,
     *  headerLikeSubject: boolean,
     * }} options
     * @returns
     */
    constructor(options, parsed) {
        if (Settings.instance instanceof Settings) {
            return Settings.instance;
        }

        this._setPosition(options.position);
        this._setHeaderLikeSubject(options.headerLikeSubject);
        this._setPrefixId(options.prefixId);
        this._setBorderCouple(options.borderType);
        this._setSpaceBeforeAfter(options.spaceBeforeAfter);
        this._setIgnoreTypes(options.ignoreTypes);
        this._setMinLengthId(options.minLengthId);
        this._setRequired(options.required);
        this._setLog(options.log);
        this._setIdMatch(options.idMatch);
        this._setSubject(parsed);

        Object.freeze(this);
        Settings.instance = this;
    }

    _setPosition(position = "start") {
        if (position !== "start" && position !== "end") {
            throw new ConfigError(
                `position=${position} - takes two parameters "start" or "end"`
            );
        }
        this.position = position;
    }

    _setPrefixId(prefixId = "c-") {
        this.prefixId = prefixId;
    }

    _setBorderCouple(borderType = "|") {
        const couple = getBorderCouple(borderType);
        if (!couple)
            throw new ConfigError(
                `borderType=${borderType} - was passed incorrectly`
            );

        this.borderCouple = getBorderCouple(borderType);
    }

    _setSpaceBeforeAfter(space) {
        if (
            space &&
            space !== "before" &&
            space !== "after" &&
            space !== "both"
        ) {
            throw new ConfigError(
                `spaceBeforeAfter=${space} - takes parameters ["before", "after", "both"]`
            );
        }
        let externalSpace = space;
        if (
            this.position === "start" &&
            space === "after" &&
            !this.headerLikeSubject
        ) {
            externalSpace = "both";
        }

        this.spaceBeforeAfter =
            externalSpace || (this.position === "start" ? "both" : "before");
    }

    _setMinLengthId(length = 2) {
        this.minLengthId = length;
    }

    _setRequired(required = true) {
        this.required = required;
    }

    _setIgnoreTypes(types = []) {
        if (typeof types !== "string" && !Array.isArray(types)) {
            throw new ConfigError(
                `ignoreTypes=${types} - must be an array or string type`
            );
        }

        if (typeof types !== "string") {
            this.ignoreTypes = types;
        } else {
            this.ignoreTypes = [types];
        }
    }

    _setLog(value) {
        const defaultPattern = "<card_id>";

        if (value && isInstanceObject(value)) {
            const onlyId = value.onlyId === undefined ? false : value.onlyId;
            this.log = Object.assign(value, {
                "onlyId": onlyId,
                "pattern": value.pattern || defaultPattern,
            });
        } else if (value && typeof value === "string") {
            this.log = {
                "message": value,
                "onlyId": false,
                "pattern": defaultPattern,
            };
        } else {
            this.log = null;
        }
    }

    _setIdMatch(idMatch = null) {
        if (!idMatch) {
            this.idMatch = null;
        } else {
            if (!(idMatch instanceof RegExp)) {
                throw new ConfigError(
                    `idMatch: ${idMatch} - was passed incorrectly`
                );
            }

            this.idMatch = idMatch;
        }
    }

    _setHeaderLikeSubject(like = false) {
        this.headerLikeSubject = like;
    }

    _setSubject(parsed) {
        if (this.headerLikeSubject) {
            this.subject = parsed.header;
        } else {
            if (!parsed.subject && !this.headerLikeSubject) {
                throw new ConfigError(
                    "if you want to use header as subject you have to set 'headerLikeSubject: true' in options"
                );
            }
            const lastIndexType = parsed.header.lastIndexOf(
                ":",
                parsed.subject.length
            );
            this.subject = parsed.header.slice(lastIndexType + 1);
        }
    }

    getErrorMessage() {
        return `The subject of your card ID should have the following syntax ${this.borderCouple.start}${this.prefixId}<card_id>${this.borderCouple.end} <message>`;
    }
}

module.exports = Settings;
