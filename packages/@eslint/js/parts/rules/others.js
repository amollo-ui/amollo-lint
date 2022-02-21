module.exports = {
    // Core
    "no-var": "error",
    "indent": [
        "off",
        4,
        {
            "SwitchCase": 1,
        },
    ],
    "camelcase": 0,

    // Tabs
    "no-tabs": 0,

    // code...
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "no-return-assign": 0,
    "comma-dangle": 0,
    "eol-last": [2, "always"],
    "eqeqeq": [2, "smart"],
    "global-require": 0,
    "dot-notation": 0,
    "no-shadow": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": [
        "error",
        {
            "allowShortCircuit": true,
            "allowTernary": true,
        },
    ],
    "unicode-bom": [2, "never"],
    "padded-blocks": [2, "never"],
    "max-params": [2, 6],
    "max-len": [
        2,
        {
            "code": 150,
            "comments": 100,
            "tabWidth": 4,
            "ignoreUrls": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true,
            "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(",
        },
    ],
    "operator-linebreak": [
        1,
        "after",
        {
            "overrides": {
                "?": "before",
                ":": "before",
            },
        },
    ],
    "no-extra-semi": 1,
};
