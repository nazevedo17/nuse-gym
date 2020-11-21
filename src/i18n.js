const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

// https://github.com/isaachinman/next-i18next#options

module.exports = new NextI18Next({
  otherLanguages: ['pt'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
