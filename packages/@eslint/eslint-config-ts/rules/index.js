module.exports = {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/brace-style": ["warn", "1tbs"],
    "@typescript-eslint/no-extra-semi": ["warn"],
    "@typescript-eslint/ban-types": [
        "warn",
        {
            "types": {
                "String": {
                    "message": "use string instead",
                    "fixWith": "string",
                },
            },
        }
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-function-type": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/triple-slash-reference": [
        "off",
        {
            "path": "always",
            "types": "always",
            "lib": "always"
        }
    ],
    "@typescript-eslint/explicit-function-return-type": [
        "off",
        {
            "allowExpressions": false,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": true,
        }
    ],
    "@typescript-eslint/no-inferrable-types": [
        "warn",
        {
            "ignoreParameters": true,
        }
    ],
    "@typescript-eslint/no-this-alias": [
        "warn",
        {
            "allowDestructuring": true,
            "allowedNames": ["that"],
        }
    ],
    "@typescript-eslint/array-type": [
        "error",
        {
            "default": "generic",
            "readonly": "generic",
        },
    ],
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
            "accessibility": "explicit",
            "overrides": {
                "constructors": "no-public",
            },
        },
    ],
    "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
                "regex": "^I[A-Z]",
                "match": true,
            },
        },
    ]
};
