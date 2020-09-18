import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Checker from './Checker';

export default {
  title: 'Sections/Checker',
  decorators: [withA11y],
};

const content = {
  title: 'TRAVEL MUCH?',
  main:
    'We have traveled to an average of 5 countries each',

  color: 'darkblue',
};

export const CheckersSample = () => (
  <Checker {...content} />
);

export const WithChildren = () => (
  <Checker {...content}>
    <div>
      <p>Children can be here</p>
    </div>
  </Checker>
);
