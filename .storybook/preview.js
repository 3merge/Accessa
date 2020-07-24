import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from './globalStyle';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
