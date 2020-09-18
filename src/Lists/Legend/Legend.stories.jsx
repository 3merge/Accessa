import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Legend from './Legend';
import galleries from '../../../cypress/fixtures/galleries.json';

export default {
  title: 'Lists/Legend',
  decorators: [withA11y],
};

export const Default = () => (
  <Legend items={galleries.map((item) => item.title)} />
);
