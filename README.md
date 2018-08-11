# Red Error

[![Build Status](https://travis-ci.org/okwolf/red-error.svg?branch=master)](https://travis-ci.org/okwolf/red-error)
[![npm version](https://img.shields.io/npm/v/red-error.svg?style=flat)](https://www.npmjs.com/package/red-error)

Humble CLI command that print its arguments in red and exits with a non-zero code. Might be useful for showing more descriptive error messages when `npm` scripts fail.

## Installation Options

### Global

```console
npm i -g red-error
```

### `npx`

No install required, just run from any folder:

```console
npx red-error I will exit with this message in red
```

Keep in mind that in order to use `npx` with `Node.js < 8` you need to either install `npx` globally:

```console
npm i -g npx
```

or update your version of `npm`:

```console
npm i -g npm
```

### Local

Install with npm / Yarn:

```console
npm i -D red-error
```

## Usage

Here's an example of one possible usage in an `npm` script for checking formatting with Prettier:

```json
{
  "scripts": {
    "format": "prettier --write *.js",
    "format:check": "prettier --list-different *.js || red-error Code not formatted, use npm run format and try again",
  }
}
```

## License

Red Error is MIT licensed. See [LICENSE](LICENSE.md).
