import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import AitHeader from './Ait';
import MarshHeader from './Marsh';

export default {
  title: 'Headers',
  decorators: [withA11y],
};

export const Ait = () => <AitHeader />;
export const Marsh = () => <MarshHeader />;
