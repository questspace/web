var en = require("./translations.en.json");
var sk = require("./translations.sk.json");

const i18n = {
  translations: {
    en,
    sk,
  },
  defaultLang: "sk",
  useBrowserDefault: false,
};

module.exports = i18n;