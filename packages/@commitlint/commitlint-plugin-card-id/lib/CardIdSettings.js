/* eslint-disable max-lines */
const FormatError = require("./error/FormatError");
const SyntaxError = require("./error/SyntaxError");
const { reEscape } = require("./utils/escape");
const { patternSpace } = require("./helpers/patternSpace");
const { splitId } = require("./utils/split");
const { logFormatSpace } = require("./utils/format");

/**
 * @throws {FormatError | SyntaxError}
 */
class CardIdSettings {
    constructor(settings) {
        if (CardIdSettings.instance instanceof CardIdSettings) {
            return CardIdSettings.instance;
        }

        this.subject = settings.subject;
        this._setCard(settings);

        if ((this.card && !settings.required) || settings.required) {
            this._isValidPosition(settings);
            this._setId(settings);
            this._validIdMatch(settings);
        }

        Object.freeze(this);
        CardIdSettings.instance = this;
    }

    _getRegPattern({ borderCouple, spaceBeforeAfter }) {
        return patternSpace(
            reEscape(borderCouple.start) + "(.*?)" + reEscape(borderCouple.end),
            spaceBeforeAfter
        );
    }

    _isValidPosition(settings) {
        const subject = this.subject;

        if (settings.position === "start") {
            if (!subject.startsWith(this.initCard)) {
                throw new FormatError(
                    `subject must start with ${logFormatSpace(this.initCard)}`
                );
            }

            if (settings.spaceBeforeAfter === "before") {
                const withoutCardSubject = subject.slice(
                    subject.search(this.initCard) + this.initCard.length
                );
                if (withoutCardSubject.startsWith(" ")) {
                    // e.g |c-222|<space>fdsafa
                    throw new FormatError(
                        "after the identifier there should not be a space"
                    );
                }
            }
        } else {
            // end
            if (settings.spaceBeforeAfter === "after") {
                const withoutCardSubject = subject.slice(
                    0,
                    subject.indexOf(this.initCard)
                );

                if (withoutCardSubject.endsWith(" ")) {
                    throw new FormatError(
                        "there must not be a space before the identifier"
                    );
                }
            }

            if (!subject.endsWith(this.initCard)) {
                throw new FormatError(
                    `subject must end with ${logFormatSpace(this.initCard)}`
                );
            }
        }
    }

    getLogMessage(log) {
        if (log) {
            return log.message.replaceAll(
                log.pattern,
                log.onlyId ? this.id : this.card
            );
        }
    }

    _validIdMatch(settings) {
        if (!settings.idMatch) return;

        const reg = new RegExp(settings.idMatch);
        if (!reg.test(this.id)) {
            throw new FormatError(
                `${logFormatSpace(this.id)} does not follow pattern ${
                    settings.idMatch
                }`
            );
        }
    }

    _setCard(settings) {
        const pattern = this._getRegPattern(settings);
        const matchSubject = this.subject.match(pattern);

        if (!matchSubject && !settings.required) return;
        if (!matchSubject)
            throw new FormatError(
                `card does not support the template ${logFormatSpace(pattern)}`
            );

        if (matchSubject) {
            const card = matchSubject[1];

            if (settings.prefixId && !card?.startsWith(settings.prefixId)) {
                throw new SyntaxError(
                    `card does not start with a prefix ${settings.prefixId}`
                );
            }

            this.card = matchSubject[1];
            this.initCard = matchSubject[0];
        }
    }

    _setId(settings) {
        if (this.card) {
            const cardId = splitId(this.card, settings.prefixId);

            if (!cardId) {
                throw new FormatError("card ID was not recognized");
            }

            if (cardId.length < settings.minLengthId) {
                throw new FormatError(
                    `the minimum length of the card id must be ${settings.minLengthId}`
                );
            }

            this.id = cardId;
        }
    }
}

module.exports = CardIdSettings;
