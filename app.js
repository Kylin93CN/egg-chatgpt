// egg-mysql/app.js

const lib = require("./app/lib/index.cjs");
const { ChatGPTAPI } = lib;

module.exports = (app) => {
  app.addSingleton("chatgpt", createChatgpt);
};

/**
 * @param  {Object} config
 * @param  {Application} app
 * @return {Object}
 */
function createChatgpt(config, app) {
  const { apiKey, completionParams, debug } = config;
  const client = new ChatGPTAPI({
    apiKey,
    debug,
    completionParams: {
      ...completionParams,
    },
  });
  return client;
}
