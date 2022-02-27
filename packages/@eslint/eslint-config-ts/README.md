# @amollo-lint/eslint-config-ts

[![MIT License][license-image]][LICENSE]
[![npm version][npm-img]][npm]

> ESLint rules for TypeScript

> **Note**: This package was not developed on demand for general use, the rules that are configured in it refer to the use of specific projects for the needs of the owner. Use it if you need such rules for your linter

## Installation
- **npm**

```
npm install --save-dev @amollo-lint/eslint-config-ts eslint typescript
```

- **yarn**

```
yarn add -D @amollo-lint/eslint-config-ts eslint typescript
```

## Usage
Create a tsconfig.json file:

```console
$ tsc --init
```

Set your eslint config to:

```
{
    "extends": "@amollo-lint/eslint-config-ts"
}
```

## Extends
- `@amollo-lint/eslint-config-js`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT
[npm-img]: https://img.shields.io/npm/v/@amollo-lint/eslint-config-ts.svg?style=flat
[npm]: https://www.npmjs.com/package/@amollo-lint/eslint-config-ts
