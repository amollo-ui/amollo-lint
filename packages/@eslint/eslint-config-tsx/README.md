# @amollo-lint/eslint-config-tsx

[![MIT License][license-image]][LICENSE]

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

Set your eslint config to:

```
{
    "extends": "@amollo-lint/eslint-config-tsx"
}
```

## Extends
- `@amollo-lint/eslint-config-ts`
- `@amollo-lint/eslint-config-jsx`

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT