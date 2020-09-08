import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Container from '@material-ui/core/Container';
import omit from 'lodash.omit';
import Grid from '@material-ui/core/Grid';
import header from '../cypress/fixtures/header.json';
import galleries from '../cypress/fixtures/galleries.json';
import partial from '../cypress/fixtures/partial';
import * as Accessa from '../src';
import Content from '../cypress/fixtures/content';
import { Default as LegendDefault } from '../src/Lists/Legend/Legend.stories.jsx';

export default {
  title: 'Accessa|Service pages',
  decorators: [withA11y],
};

export const ExampleOne = () => (
  <Container maxWidth="xl" disableGutters component="main">
    <Accessa.Headers.Billboard
      {...omit(header, ['subtitle'])}
    />
    <Accessa.Sections.Block>
      <Content />
      <LegendDefault />
    </Accessa.Sections.Block>
    <Accessa.Features.Field
      title={header.subtitle}
      data={galleries.map((item) => ({
        onClick: () => alert('Click'),
        fluid: {
          src: item.src,
        },
        ...item,
      }))}
    />
    <Accessa.CallToActions.Leader {...partial} />
  </Container>
);
