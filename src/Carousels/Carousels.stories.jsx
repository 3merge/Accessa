import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import * as Carousels from '.';
import carousels from '../../cypress/fixtures/carousels';

export default {
  title: 'Carousels',
  decorators: [withA11y],
};

export const Ladder = () => (
  <Carousels.Ladder
    data={carousels}
    redirect={(path) => alert(path)}
  />
);

export const Slideshow = () => (
  <Carousels.Slideshow
    data={carousels}
    redirect={(path) => alert(path)}
    component={({ elementId, title }) => {
      return (
        <div
          style={{
            border: '2px solid white',
            display: 'block',
            height: 200,
            background: 'lightblue',
            width: '100%',
          }}
        >
          <span id={elementId}>{title}</span>
        </div>
      );
    }}
  />
);
