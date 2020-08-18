import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Neapolitan from './Neapolitan';
import carousels from '../../../cypress/fixtures/carousels';
import {
  Blanket,
  Compass,
  Spotlight,
} from '../../Partials/Partials.stories.jsx';

export default {
  title: 'Layouts|Neapolitan',
  decorators: [withA11y],
};

export const WithBlanketFocalComponent = () => (
  <Neapolitan
    fullHeight
    carousel={carousels}
    focalComponent={<Blanket />}
  >
    <p>Using Blanket partial</p>
  </Neapolitan>
);

export const WithSpotlightFocalComponent = () => (
  <Neapolitan
    carousel={carousels}
    focalComponent={<Spotlight />}
  >
    <p>Using Spotlight partial</p>
  </Neapolitan>
);

export const WithCompassFocalComponent = () => (
  <Neapolitan focalComponent={<Compass />}>
    <p>Using Compass partial</p>
  </Neapolitan>
);
