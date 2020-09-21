import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Tree from './Tree';
import { treeList } from '../../../cypress/fixtures/lists.js';

export default {
  title: 'Lists/Tree',
  decorators: [withA11y],
};

export const TreeSample = () => <Tree lists={treeList} />;
