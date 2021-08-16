const withTM = require('next-transpile-modules')(['@utrecht/web-component-library-react']);

module.exports = {
  reactStrictMode: true,
  ...withTM(),
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
};
