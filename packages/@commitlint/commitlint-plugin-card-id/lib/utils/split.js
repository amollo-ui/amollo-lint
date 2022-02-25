/**
 * @param {string} value
 * @param {string} match
 * @returns {string | null}
 */
exports.splitId = (value, match) => {
    if (match.length === 0) return value;

    const { "1": group, index } = value.match(`(${match})?`);

    if (group) {
        const lastIndex = index + (group.length - 1);
        return value.substring(lastIndex + 1);
    }

    return null;
};
