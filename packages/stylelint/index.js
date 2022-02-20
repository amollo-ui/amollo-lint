"use-strict";

module.exports = {
    "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"],
    "plugins": ["stylelint-order"],
    "ignoreFiles": ["**/node_modules/**/*", "**/.cache/**/*"],
    "rules": {
        "block-closing-brace-newline-before": null,
        "block-closing-brace-newline-after": null,
        "at-rule-semicolon-newline-after": null,
        "no-descending-specificity": null,
        "at-rule-no-unknown": null,
        "block-no-empty": null,
        "no-empty-source": null,
        "max-empty-lines": 4,
        "selector-pseudo-element-colon-notation": "double",
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": ["composes"],
                "ignoreSelectors": [":export", ":global", ":local", ":import"],
            },
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["global", "local", "export", "import"],
            },
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                "ignore": [
                    "after-comment",
                    "first-nested",
                    "inside-block",
                    "blockless-after-same-name-blockless",
                    "blockless-after-blockless",
                ],
                "ignoreAtRules": ["array", "of", "at-rules", "else", "else if"],
            },
        ],
        "declaration-block-semicolon-newline-after": null,
        "string-quotes": "double",
        "order/order": [],
        "order/properties-order": [],
        "color-function-notation": "legacy",
        "scss/dollar-variable-empty-line-before": null,
        "selector-class-pattern": null,
        "scss/no-global-function-names": null,
        "scss/at-import-partial-extension": null,
        "scss/operator-no-newline-after": null,
        "value-keyword-case": null,
        "block-opening-brace-space-before": [
            "always",
            {
                "ignoreAtRules": ["each"],
            },
        ],
    },
};
