/**
 * @param {string} pattern
 * @param {"before" | "after" | "both" | "never"} spaceBeforeAfter
 *
 * @returns {string}
 */
const patternSpace = (pattern, spaceBeforeAfter) => {
    const space = " ";
    let passPattern = pattern;

    switch (spaceBeforeAfter) {
        case "after": {
            passPattern = passPattern + space;
            break;
        }
        case "before": {
            passPattern = space + passPattern;
            break;
        }
        case "both": {
            passPattern = space + passPattern + space;
        }
    }

    return passPattern;
};

exports.patternSpace = patternSpace;
