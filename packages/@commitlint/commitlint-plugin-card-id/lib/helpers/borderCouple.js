/**
 * @param {string} value
 * @return {{ start: string, end: string }}
 */
const pairStringBorder = value => {
    const pair = {};

    switch (value) {
        case "|":
        case "||": {
            pair.start = "|";
            pair.end = "|";
            break;
        }
        case "[":
        case "[]": {
            pair.start = "[";
            pair.end = "]";
            break;
        }
        case "(":
        case "()": {
            pair.start = "[";
            pair.end = "]";
            break;
        }
        case "{":
        case "{}": {
            pair.start = "[";
            pair.end = "]";
            break;
        }
        case "<":
        case "<>": {
            pair.start = "<";
            pair.end = ">";
            break;
        }
        default: {
            if (value.includes(",")) {
                pair.start = value.slice(0, value.indexOf(",")).trim();
                pair.end = value.slice(value.indexOf(",") + 1).trim();
                break;
            }

            pair.start = value;
            pair.end = value;
        }
    }

    return pair;
};

/**
 * @param {string | [string, string]} borderType
 * @returns {{ start: string, end: string } | null}
 */
const getBorderCouple = borderType => {
    let border = null;

    if (typeof borderType === "string") {
        border = pairStringBorder(borderType);
    } else if (Array.isArray(borderType) && borderType.length === 2) {
        border = {
            "start": borderType[0],
            "end": borderType[1],
        };
    }

    return border;
};

exports.getBorderCouple = getBorderCouple;
