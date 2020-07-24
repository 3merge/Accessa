const path = require('path');
const webpack = require('webpack');

module.exports = {
  addons: ['@storybook/addon-a11y/register'],
  stories: ['../src/**/*.stories.jsx'],
};
