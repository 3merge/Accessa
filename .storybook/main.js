const path = require('path');
const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
  ],
  stories: ['../src/**/*.stories.jsx'],
};
