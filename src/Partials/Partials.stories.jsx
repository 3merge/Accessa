import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import styled from 'styled-components';
import media from 'styled-media-query';
import animationData from '../../cypress/fixtures/drawkit-grape-animation';
import fixture from '../../cypress/fixtures/partial';
import * as Partials from '.';

export default {
  title: 'Parials',
  decorators: [withA11y],
};

const Wrap = styled.div`
  height: 100vh;
  width: 100%;

  ${media.lessThan('large')`
        height: 350px;
      `}
`;

export const Blanket = () => (
  <Wrap>
    <Partials.Blanket
      fluid={{
        src:
          'https://images.unsplash.com/photo-1597751414765-fb60a63fff1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80',
      }}
    />
  </Wrap>
);

export const Spotlight = () => (
  <div
    style={{
      backgroundColor: 'rgb(255 234 235)',
      height: '100%',
      width: '100%',
    }}
  >
    <Partials.Spotlight
      animationData={animationData}
      logo="https://logoipsum.com/logo/logo-16.svg"
      color="#865c6c"
      {...fixture}
    />
  </div>
);

export const Compass = () => (
  <Wrap>
    <Partials.Compass
      apiKey="AIzaSyCt7yombMtPIeU_-mWAi4_3iuOfh-Z_LY0"
      street="104 Crockford Blvd"
      city="Scarborough"
      postal="M1R 3C3"
    />
  </Wrap>
);
