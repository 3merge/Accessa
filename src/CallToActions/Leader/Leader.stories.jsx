import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Leader from '.';
import partial from '../../../cypress/fixtures/partial';

export default {
  title: 'Call to Actions/Leader',
  decorators: [withA11y],
};

export const AsDefault = () => (
  <Leader
    {...partial}
    fluid={{
      src: 'https://logoipsum.com/logo/logo-16.svg',
    }}
  >
    Custom CTA
  </Leader>
);

export const WrappedInColour = () => (
  <div
    style={{
      backgroundColor: 'rgb(32 47 40)',
      color: '#FFF',
    }}
  >
    <AsDefault />
  </div>
);
