import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Grocery from '.';
import social from '../../../cypress/fixtures/social';
import { columns } from '../../../cypress/fixtures/footer';

export default {
  title: 'Footers|Grocery',
  decorators: [withA11y],
};

export const WithColumns = () => (
  <Grocery
    social={social}
    columns={[...columns, ...columns]}
  >
    <img
      alt="Example logo"
      src="https://logoipsum.com/logo/logo-16.svg"
      style={{ width: 115 }}
    />
  </Grocery>
);
