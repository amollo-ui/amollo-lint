module.exports = {
    "env": {
        "jest": true,
    },
    "extends": [
        "@amollo-lint/eslint-config-js",
        "plugin:react/recommended", // eslint-plugin-react
        "plugin:jsx-a11y/recommended", // eslint-plugin-jsx-a11y
    ],
    "plugins": ["react", "react-hooks", "jsx-a11y"],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "jsx-quotes": [2, "prefer-double"],
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": [
            2,
            {
                "aspects": ["invalidHref", "preferButton"],
                "components": ["Link"],
                "specialLink": ["route"],
            },
        ],
        "react/prop-types": [
			"error",
			{
				"skipUndeclared": true,
			},
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
		"no-param-reassign": "warn",
		"consistent-return": "warn",
    }
};
