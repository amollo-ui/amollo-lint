# @amollo-lint/commitlint-plugin-card-id

[![MIT License][license-image]][LICENSE]

> recognition and inclusion of the card ID

## Installation
- **npm**
```
npm install --save-dev @amollo-lint/commitlint-plugin-card-id @commitlint/config-conventional
```

- **yarn**

```
yarn add -D @amollo-lint/commitlint-plugin-card-id @commitlint/config-conventional
```

## Usage
Set your commitlint config to:
```js
{
    extends: "@commitlint/config-conventional",
    plugins: ["@amollo-lint/commitlint-plugin-card-id"],
    rules: {
        "card-id": [
            2,
            "always",
            {
                required: true,
                position: "start",
                spaceBeforeAfter: "both",
                prefixId: "c-",
                borderType: "|",
                minLengthId: 3,
                ignoreTypes: ["build", "test", "ci"],
                log: {
                    message: "Link to the map in trello https://trello.com/c/<trello_id>",
                    onlyId: true,
                    pattern: "<trello_id>"
                }
            }
        ]
    }
}
```

### Example
```console
$ git commit -m "feat(bar): |c-ES7Mn9Ow| update animation for bar"

Link to the card in trello https://trello.com/c/ES7Mn9Ow
```

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT
