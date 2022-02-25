/**
 * @param {string} value
 * @returns {string} replace spaces with syntax <space>...<space>
 */
exports.logFormatSpace = value => {
    let formatSpaceValue = value;

    if (formatSpaceValue.startsWith(" ")) {
        formatSpaceValue = formatSpaceValue.replace(" ", "<space>");
    }
    if (formatSpaceValue.endsWith(" ")) {
        formatSpaceValue = formatSpaceValue.replace(/.$/, "<space>");
    }

    return formatSpaceValue;
};
