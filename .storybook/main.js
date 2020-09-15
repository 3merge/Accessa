const path = require('path');
const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
  ],
  stories: [
    '../examples/*.stories.jsx',
    '../src/**/*.stories.jsx',
  ],
};
