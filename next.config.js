const nextTranslate = require('next-translate');
const LANGUAGES = ['sk', 'en'];

module.exports = nextTranslate({
  reactStrictMode: true,

  future: {
    webpack5: true,
  },

  i18n: {
    locales: ['sk', 'en'],
    defaultLocale: 'sk',
  },

  exportPathMap(defaultPathMap) {
    const pathMap = {};

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      pathMap[key] = value;

      LANGUAGES.forEach((language) => {
        pathMap[`/${language}${key}`] = { ...value, query: { language } };
      });
    });

    return pathMap;
  },
});
