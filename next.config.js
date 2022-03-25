const withTM = require('next-transpile-modules')(['@utrecht/web-component-library-react']);

module.exports = {
  reactStrictMode: true,
  ...withTM(),
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        // Apply these security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; style-src data: 'self' 'unsafe-inline'; script-src data: 'self' 'unsafe-eval'",
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};
