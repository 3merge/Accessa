import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Elements from '.';
import lists from '../../../cypress/fixtures/elements.json';

export default {
  title: 'Lists/Elements',
  decorators: [withA11y],
};

export const ElementList = () => <Elements lists={lists} />;
