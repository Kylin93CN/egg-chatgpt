"use strict";

/**
 * egg-chatgpt default config
 * @member Config#chatgpt
 * @property {String} SOME_KEY - some description
 */
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
