const path = require('path');
const webpack = require('webpack');

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxBabelOptions: {
          babelrc: true,
          configFile: true,
        },
      },
    },
  ],
  stories: [
    '../examples/*.stories.jsx',
    '../src/**/*.stories.jsx',
    '../src/**/*stories.mdx',
  ],
};
