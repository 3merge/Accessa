import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Lottie from 'react-lottie';
import Neapolitan from './Neapolitan';
import * as Layout from '.';
import carousels from '../../cypress/fixtures/carousels';
import galleries from '../../cypress/fixtures/galleries';
import animationData from '../../cypress/fixtures/drawkit-grape-animation';
import * as Features from '../Features';
import * as Galleries from '../Galleries';
import * as Header from '../Headers';
import * as Sections from '../Sections';
// import { Viewport } from '../Utils';

export default {
  title: 'Layouts',
  decorators: [withA11y],
};

export const NeapolitanLayout = () => (
  <Neapolitan
    focalComponent={
      <div
        style={{
          textAlign: 'center',
          padding: '3rem',
          margin: '0 auto',
          maxWidth: 550,
          height: '80vh',
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

        <h2 style={{ fontSize: '1.21rem' }}>
          Title of this component
        </h2>
        <p
          style={{
            lineHeight: 1.73,
            fontSize: '0.877rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam convallis bibendum mi. Etiam quis
          lectus ac elit mollis dapibus. Pellentesque
          habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nullam non
          purus vel neque pharetra efficitur id et sapien
        </p>
      </div>
    }
    fullHeight
    carousel={carousels}
  >
    <p style={{ padding: '2rem' }}>What ever we want!</p>
  </Neapolitan>
);

export const Inlay = () => <Layout.Inlay />;
export const Example = () => (
  <>
    <Header.Mast title="Page name" />
    <Sections.News />
    <Features.Field
      data={galleries.map((item) => ({
        onClick: () => alert('Click'),
        ...item,
      }))}
      title="Our team"
    />
    <Galleries.Bubbles
      images={galleries}
      title="Our team"
    />
  </>
);
