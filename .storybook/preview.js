import React from 'react';
import {
  addDecorator,
  addParameters,
} from '@storybook/react';
import { GlobalStyles } from './globalStyle';
import {
  DocsPage,
  DocsContainer,
} from '@storybook/addon-docs/blocks';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

addParameters({
  options: {
    selectedPanel: 'docs',
    // showPanel: false,
    panelPosition: 'right',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
