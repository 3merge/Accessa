import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Lottie from 'react-lottie';
import BarRail from './BarRail';
import Neapolitan from './Neapolitan';
import carousels from '../../cypress/fixtures/carousels';
import animationData from '../../cypress/fixtures/drawkit-grape-animation';

export default {
  title: 'Layouts',
  decorators: [withA11y],
};

export const BarRailLayout = () => (
  <BarRail
    carousel={carousels}
    focalComponent={
      <div
        style={{
          textAlign: 'center',
          padding: '3rem',
          margin: '0 auto',
          maxWidth: 550,
        }}
      >
        <Lottie
          height="350px"
          width="100%"
          options={{
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
        />

        <h2>Title of this component</h2>
        <p style={{ lineHeight: 1.73 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam convallis bibendum mi. Etiam quis
          lectus ac elit mollis dapibus. Pellentesque
          habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nullam non
          purus vel neque pharetra efficitur id et sapien
        </p>
      </div>
    }
  >
    <p>Form or content</p>
  </BarRail>
);

export const NeapolitanLayout = () => (
  <Neapolitan carousel={carousels}>
    <p>What ever we want!</p>
  </Neapolitan>
);
