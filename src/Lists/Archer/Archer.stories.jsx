import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Archer from './Archer';
import { lists } from '../../../cypress/fixtures/lists';

export default {
  title: 'Lists/Archer',
  decorators: [withA11y],
};

export const Underline = () => (
  <Archer underline lists={lists} subheader="List Items" />
);

export const DarkMode = () => (
  <Archer darkMode lists={lists} subheader="List Items" />
);
