# @dweidner/stylelint-config-property-order

[![NPM version](https://img.shields.io/npm/v/@dweidner/stylelint-config-property-order.svg)](https://www.npmjs.org/package/@dweidner/stylelint-config-property-order)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.txt)

> An opinionated, shareable config for stylelint to sort CSS properties by predefined rules.

CSS properties are sorted into the following logical groups by using custom rules for the [`stylelint-order`](https://github.com/hudochenkov/stylelint-order) plugin:

1. [Reset](./config/reset.js)
1. [Content](./config/content.js)
1. [Display Mode](./config/display.js)
1. [List Style](./config/list.js)
1. [Flexbox](./config/flexbox.js)
1. [Grid Layout](./config/grid.js)
1. [Alignment](./config/alignment.js)
1. [Order](./config/order.js)
1. [Box Model](./config/box-model.js)
1. [Visibility](./config/visibility.js)
1. [Typography](./config/typography.js)
1. [Background](./config/background.js)
1. [Transformation](./config/transformation.js)
1. [Animation](./config/animation.js)

## Installation

Install [stylelint](https://stylelint.io/) and `@dweidner/stylelint-config-property-order`

**With npm**
```bash
npm install --save-dev stylelint @dweidner/stylelint-config-property-order
```

**With yarn**
```bash
yarn add --dev stylelint @dweidner/stylelint-config-property-order
```

## Usage

If you've installed `@dweidner/stylelint-config-property-order` locally within your project, just reference it in your `stylelint` config. See the [stylelint configuration documentation](https://stylelint.io/user-guide/configuration/) for more details.

```json
{
  "extends": [
    "@dweidner/stylelint-config",
    "@dweidner/stylelint-config-property-order"
  ]
}
```

Check the [stylelint CLI documentation]((https://stylelint.io/user-guide/cli/) to see how to execute the linter. One possibility would to add the following configuration to your `package.json`:

```json
{
  "scripts": {
    "stylelint": "stylelint 'src/**/*.scss'"
  }
}
```

Now you can check for style violation by running the following commands:

**With npm**
```bash
npm run stylelint
```

**With Yarn**
```bash
yarn run stylelint
```

## See also

This configuration is heavily based on the configuration provided by [`stylelint-config-idiomatic-order`](https://github.com/ream88/stylelint-config-idiomatic-order) and [`stylelint-config-property-sort-order-smacss`](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss).

## [Changelog](CHANGELOG.md)

## [License](LICENSE.txt)
