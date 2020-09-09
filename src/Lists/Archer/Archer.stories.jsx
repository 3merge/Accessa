import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Archer from './Archer';

export default {
  title: 'Lists|Archer',
  decorators: [withA11y],
};

export const List = () => {
  return <Archer />;
};
