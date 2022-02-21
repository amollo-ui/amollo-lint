const comments = require("./comments");
const line = require("./line");
const quotes = require("./quotes");
const spacing = require("./spacing");
const others = require("./others");

module.exports = {
    ...comments,
    ...line,
    ...quotes,
    ...spacing,
    ...others,
};
