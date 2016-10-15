#locale-emoji

Convert a locale id string (LCID) to a unicode regional indicator symbol.

## Installation

```sh
$ npm install locale-emoji
```

## Usage

```js
import localeEmoji from 'locale-emoji';

localeEmoji('en-CA'); // 🇨🇦
localeEmoji('en_CA'); // 🇨🇦
localeEmoji('en'); // 🇬🇧
```