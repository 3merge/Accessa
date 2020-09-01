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
    carousel={carousels}
    focalComponent={<Blanket />}
  >
    <p>Using Blanket partial</p>
  </Neapolitan>
);

export const WithSpotlightFocalComponent = () => (
  <div style={{ height: '100vh' }}>
    <Neapolitan
      carousel={carousels}
      focalComponent={<Spotlight />}
      reverseOnMobile
    >
      <p>Using Spotlight partial</p>
    </Neapolitan>
  </div>
);

export const WithCompassFocalComponent = () => (
  <Neapolitan focalComponent={<Compass />}>
    <p>Using Compass partial</p>
  </Neapolitan>
);

export const WithContentOverflow = () => (
  <Neapolitan focalComponent={<div />} carousel={carousels}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nunc sollicitudin efficitur elit. Sed diam
      lacus, elementum id convallis quis, accumsan sit amet
      enim. Quisque ex massa, facilisis ut suscipit et,
      cursus id nisi. Nullam sit amet justo pretium sem
      scelerisque consectetur. Curabitur scelerisque massa
      vitae congue tempus. Pellentesque interdum diam sit
      amet mollis gravida. Duis pellentesque rhoncus
      aliquam. Donec dictum volutpat sem, sed ultrices quam
      condimentum id. Proin congue metus eget turpis ornare,
      et ultricies metus lacinia. Nam a risus semper,
      egestas dolor et, laoreet risus. Nunc finibus
      fringilla dui, non condimentum ante sagittis non.
      Nullam non dictum sem. Pellentesque vehicula hendrerit
      facilisis.
    </p>
  </Neapolitan>
);
