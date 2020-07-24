import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Ladder } from '.';
import carousels from '../../cypress/fixtures/carousels';

export default {
  title: 'Carousels',
  decorators: [withA11y],
};

export const CarouselLadder = () => (
  <Ladder
    data={carousels}
    redirect={(path) => alert(path)}
  />
);
