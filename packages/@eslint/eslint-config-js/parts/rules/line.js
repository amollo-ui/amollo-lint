module.exports = {
    "brace-style": [
        2,
        "1tbs",
        {
            "allowSingleLine": true,
        },
    ],
    "semi": [
        2,
        "always",
        {
            "omitLastInOneLineBlock": true,
        },
    ],
    "newline-after-var": 0,
    "no-multiple-empty-lines": [
        2,
        {
            "max": 2,
            "maxEOF": 0,
            "maxBOF": 0,
        },
    ],
    "multiline-ternary": 0,
    "max-lines": [2, 100],
    "linebreak-style": 0,
    "function-call-argument-newline": [2, "consistent"],
    "object-curly-newline": [
        2,
        {
            "ImportDeclaration": {
                "consistent": true,
                "multiline": true,
            },
        },
    ],
};
