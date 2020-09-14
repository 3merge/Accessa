import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Tree from '.';
import { columns } from '../../../cypress/fixtures/footer';

export default {
  title: 'Navigation/Tree',
  decorators: [withA11y],
};

export const WithNesting = () => (
  <Tree
    items={[
      {
        label: 'Home',
        href: '/',
      },
      ...columns,
      {
        label: 'Without children',
        href: '/',
      },
    ]}
  />
);
