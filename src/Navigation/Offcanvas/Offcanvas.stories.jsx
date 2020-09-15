import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Offcanvas from '.';
import { WithNesting } from '../Tree/Tree.stories.jsx';

export default {
  title: 'Navigation/Offcanvas',
  decorators: [withA11y],
};

export const WithTree = () => (
  <Offcanvas
    logo={
      <img
        alt="Example logo"
        src="https://logoipsum.com/logo/logo-16.svg"
        style={{ width: 95 }}
      />
    }
  >
    <WithNesting />
  </Offcanvas>
);
