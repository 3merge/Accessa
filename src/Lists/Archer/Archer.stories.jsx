import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Archer from './Archer';

const nestedItems = [
  {
    listItemText: 'Nested',
    onClick: () => console.log('Nested'),
  },
  {
    listItemText: 'Wow',
    onClick: () => console.log('Wow'),
  },
];

const lists = [
  {
    listItemText: 'Hello',
    onClick: () => console.log('No nested items!'),
  },
  {
    listItemText: 'World',
    nestedItems,
  },
];

export default {
  title: 'Lists|Archer',
  decorators: [withA11y],
};

export const List = () => {
  return (
    <Archer
      underline
      darkMode
      lists={lists}
      subheader="List Items"
    />
  );
};
