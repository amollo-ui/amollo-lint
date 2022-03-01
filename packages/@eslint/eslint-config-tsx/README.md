# @amollo-lint/eslint-config-tsx

[![MIT License][license-image]][LICENSE]
[![npm version][npm-img]][npm]

> ESLint rules for React TSX

> **Note**: This package was not developed on demand for general use, the rules that are configured in it refer to the use of specific projects for the needs of the owner. Use it if you need such rules for your linter

## Installation
- **npm**

```
npm install --save-dev @amollo-lint/eslint-config-tsx eslint typescript
```

- **yarn**

```
yarn add -D @amollo-lint/eslint-config-tsx eslint typescript
```

## Usage
Create a tsconfig.json file:

```console
$ tsc --init
```

Set your eslint config to: `.eslintrc.js` 

```
{
    "extends": "@amollo-lint/eslint-config-tsx",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
    }
}
```

## Extends
- `@amollo-lint/eslint-config-ts`
- `@amollo-lint/eslint-config-jsx`

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT
[npm-img]: https://img.shields.io/npm/v/@amollo-lint/eslint-config-tsx.svg?style=flat
[npm]: https://www.npmjs.com/package/@amollo-lint/eslint-config-tsx
