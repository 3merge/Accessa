import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import * as Layout from '.';
import galleries from '../../cypress/fixtures/galleries';
import * as Features from '../Features';
import * as Galleries from '../Galleries';
import * as Header from '../Headers';
import * as Sections from '../Sections';

export default {
  title: 'Layouts',
  decorators: [withA11y],
};

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
