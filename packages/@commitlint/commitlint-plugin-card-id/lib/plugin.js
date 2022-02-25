const Settings = require("./Settings");
const CardIdSettings = require("./CardIdSettings");

/**
 * @typedef {{
 *  type: string | null,
 *  scope: string | null,
 *  subject: string | null,
 *  merge: any,
 *  header: string | null,
 *  body: string | null,
 *  footer: string | null,
 *  notes: Array,
 *  references: Array,
 *  mentions: Array<string>,
 *  revert: any,
 *  raw: string | null,
 * }} Commit
 *
 * @typedef {"always" | "never"} RuleConfigCondition
 *
 * @typedef {{
 *  position: "start" | "end",
 *  ignoreTypes: Array<string> | string,
 *  prefixId: string | boolean,
 *  borderType: [string, string] | string,
 *  minLengthId: number,
 *  ignoreScopes: Array<string> | string,
 *  required: boolean,
 *  idMatch: RegExp,
 *  spaceBeforeAfter: "before" | "after" | "both",
 *  headerLikeSubject: boolean,
 *  log: {
 *    message: string,
 *    onlyId: boolean,
 *    pattern: string,
 *  }
 * }} Value
 */

/**
 * @example ✔ feat(www): |c-v1221211| initial commit
 * @example ❌ feat(www): initial commit
 * @param {Commit} parsed information about commit
 * @param {RuleConfigCondition} when
 * @param {Value} value
 * @param {string | null} parsed.type @example `[fix, chore, ...]`
 * @param {string | null} parsed.scope @example www
 * @param {string | null} parsed.subject @example "initial commit"
 * @param {string | null} parsed.header @example "fix(www): initial commit"
 * @returns {[Boolean, string]}
 */
const subjectIncludeCardRule = (parsed, when, value = {}) => {
    if (when === "never") {
        return [false, "the \"card-id\" rule does not support \"never\""];
    }

    try {
        const settings = new Settings(value, parsed);
        const errorMessage = settings.getErrorMessage();

        if (
            (parsed.type && settings.ignoreTypes.includes(parsed.type)) ||
            (parsed.scope && settings.ignoreScopes.includes(parsed.scope))
        ) {
            return [true, errorMessage];
        }

        const cardSettings = new CardIdSettings(settings);

        if (cardSettings.card && settings.required) {
            if (settings.log) {
                const message = cardSettings.getLogMessage(settings.log);
                console.log(message);
            }
        }

        return [true, errorMessage];
    } catch (err) {
        return [false, `${err.name}: ${err.message}`];
    }
};

module.exports = subjectIncludeCardRule;
