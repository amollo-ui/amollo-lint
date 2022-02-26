# @amollo-lint/commitlint-plugin-scope-ws

[![MIT License][license-image]][LICENSE]
[![npm version][npm-img]][npm]

> recognition and inclusion of the package names of the workspaces

Plugin for naming scopes commit headers. The namespace will be assigned from the `package.json` parameter for the inner workspaces and will replace the `/` character with `:` (e.g `@amollo-lint/stylelint` with `@amollo-lint:stylelint`). To shorten the scope name, add the `scopeCommitName` parameter to `package.json`.

## Installation
- **npm**
```
npm install --save-dev @amollo-lint/commitlint-plugin-scope-ws @commitlint/config-conventional
```

- **yarn**
```
yarn add -D @amollo-lint/commitlint-plugin-scope-ws @commitlint/config-conventional
```

## Usage
Set your commitlint config to:
```js
{
    extends: "@commitlint/config-conventional",
    plugins: ["@amollo-lint/commitlint-plugin-scope-ws"],
    rules: {
        "scope-empty": [2, "never"],
        "scope-ws": [
            2,
            "always",
            {
                "additionalScopes": ["root"]
            }
        ]
    }
}
```

### Example
Declare a worktree in root scope
```json
{
  "workspaces": {
    "packages": [
      "packages/*",
      "packages/@eslint/*",
      "packages/@commitlint/*"
    ]
  },
}
```

Structure project
```bash
.
├── ....
├── package.json
├── packages
│   ├── @commitlint
│   │   ├── commitlint-plugin-card-id
│   │   │   ├── ....
│   │   │   └── package.json > scopeCommitName: @amollo-lint/cpci
│   │   └── commitlint-plugin-scope-ws
│   │       ├── ....
│   │       └── package.json > scopeCommitName: @amollo-lint/cpsw
│   ├── @eslint
│   │   └── eslint-config-js
│   │       ├── ....
│   │       └── package.json > name: @amollo-lint/eslint-config-js
│   └── stylelint
│       ├── ...
│       └── package.json > name: @amollo-lint/stylelint
└── yarn.lock
```

Record changes to the repository

```console
$ git commit -m "feat(@amollo-lint:cpci): creating ground rules"
```

## Options
### `additionalScopes`
Set up additional scopes<br/>
**accept** - `string` or `string[]` <br/>
**default** - `[]` <br/><br/>
example:
  - **["root"]**
    - *incorrect*
        - `"<type>(incompatibleScope): initial commit"`
    - *correct*
        - `"<type>(root): initial commit"`

## Extends
- `fast-glob`

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT
[npm-img]: https://img.shields.io/npm/v/@amollo-lint/commitlint-plugin-scope-ws.svg?style=flat
[npm]: https://www.npmjs.com/package/@amollo-lint/commitlint-plugin-scope-ws
