# egg-chatgpt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-chatgpt.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-chatgpt
[travis-image]: https://img.shields.io/travis/eggjs/egg-chatgpt.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-chatgpt
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-chatgpt.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-chatgpt?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-chatgpt.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-chatgpt
[snyk-image]: https://snyk.io/test/npm/egg-chatgpt/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-chatgpt
[download-image]: https://img.shields.io/npm/dm/egg-chatgpt.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-chatgpt

<!--
Description here.
-->

## Install

```bash
$ npm i egg-chatgpt --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.chatgpt = {
  enable: true,
  package: 'egg-chatgpt',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.chatgpt = {
  clients: {
  c1: {
    apiKey: "api1",
  },
  c2: {
    apiKey: "api2",
  },
  },
  default: {
    debug: false,
    completionParams: {
      model: "gpt-3.5-turbo",
    },
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```javascript
const chatgpt = this.app.chatgpt;
const api =  chatgpt.get('c1')
const res = await api.sendMessage('hi')
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
