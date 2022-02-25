# @amollo-lint/commitlint-plugin-card-id

[![MIT License][license-image]][LICENSE]
[![npm version][npm-img]][npm]

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

## Options

### position
Location in the subject of the commit <br/>
**accept** - `"start"` and `"end"` <br/>
**default** - `"start"` <br/><br/>
example:
  - **start**
    - *incorrect*
        - `"<type>(<scope>): initial commit |c-ES7Mn9Ow|"`
        - `"<type>(<scope>): initial |c-ES7Mn9Ow| commit"`
    - *correct*
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`
  - **end**
     - *incorrect*
        - `"<type>(<scope>): initial |c-ES7Mn9Ow| commit"`
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`
     - *correct*
        - `"<type>(<scope>): initial commit |c-ES7Mn9Ow|"`
    
### ignoreTypes
Ignoring the `card-id` rule for comparable types <br/>
**accept** - `string[]` <br/>
**default** - `[]` <br/><br/>
example:
  - **["test", "ci"]** - `required: true`
    - *incorrect* - 
        - `"fix(<scope>): initial commit"`
    - *correct*
        - `"ci(<scope>): initial commit"`

### prefixId
Prefix for identifier <br/>
**accept** - `string` <br/>
**default** - `"c-"` <br/><br/>
example:
  - **id-**
    - *incorrect*
        - `"<type>(<scope>): |ES7Mn9Ow| initial commit"`
        - `"<type>(<scope>): |id:ES7Mn9Ow| initial commit"`
    - *correct*
        - `"<type>(<scope>): |id-ES7Mn9Ow| initial commit"`

### borderType
Card id border type <br/>
**accept** - `string | [string, string]` <br/>
**acceptSingleValue** - `"| or ||" | "{ or {}" | "< or <>" | "( or ()"` <br/>
**default** - `"|"` <br/><br/>
example:
  - **{** or **["{", "}"]**
    - *incorrect*
        - `"<type>(<scope>): [c-ES7Mn9Ow] initial commit"`
        - `"<type>(<scope>): (c-ES7Mn9Ow) initial commit"`
    - *correct*
        - `"<type>(<scope>): {c-ES7Mn9Ow} initial commit"`

### minLengthId
Minimum identifier length <br/>
**accept** - `number` <br/>
**default** - `2` <br/><br/>
example:
  - **4**
    - *incorrect*
        - `"<type>(<scope>): |c-ES7| initial commit"`
    - *correct*
        - `"<type>(<scope>): |c-ES7M| initial commit"`

### required
If `true`, then the map id must be in the commit subject.
If `false`, validation will only occur when the map id pattern is found in the commit subject <br/>
**accept** - `false` or `true` <br/>
**default** - `true` <br/><br/>
example:
  - **false** - `minLengthId: 4`
    - *incorrect*
        - `"<type>(<scope>): |c-ES7| initial commit"`
    - *correct*
        - `"<type>(<scope>): initial commit"`
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`
  - **true**
    - *incorrect*
        - `"<type>(<scope>): initial commit"`
    - *correct*
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`

### idMatch
Matching with your own pattern <br/>
**accept** - `RegExp` <br/>
**default** - `null` <br/><br/>
example:
  - **/^\d+$/** - only numbers
    - *incorrect*
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`
    - *correct*
        - `"<type>(<scope>): |c-4129791| initial commit"`
  
### spaceBeforeAfter
Space on the sides of the card ID <br/>
**accept** - `"before" | "after" | "both"` <br/>
**default** - if position is equal to start, then `"both"` otherwise position is equal to end, then `"before"`  <br/><br/>
example:
  - **after** - `position: end`
    - *incorrect* 
        - `"<type>(<scope>): initial commit |c-ES7Mn9Ow|"`
    - *correct*
        - `"<type>(<scope>): initial commit |c-ES7Mn9Ow| "`

### headerLikeSubject
If checking a commit without headers, enable this option so that the commit subject is accepted as the header <br/>
**accept** - `true` or `false` <br/>
**default** - `false` <br/><br/>
example:
  - **true**
    - *incorrect*
        - `"<type>(<scope>): |c-ES7Mn9Ow| initial commit"`
    - *correct*
        - `"|c-ES7Mn9Ow| initial commit"`
### log
Displaying a message after a successful commit check <br/>
**accept** - `{message: string, onlyId: boolean, pattern: string} | string` <br/>
**default** - `null` <br/><br/>

[license-image]: https://img.shields.io/npm/l/format-message.svg
[LICENSE]: https://github.com/format-message/format-message/blob/master/LICENSE-MIT
[npm-img]: https://img.shields.io/npm/v/@amollo-lint/commitlint-plugin-card-id.svg?style=flat
[npm]: https://www.npmjs.com/package/@amollo-lint/commitlint-plugin-card-id
