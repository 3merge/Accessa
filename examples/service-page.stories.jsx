import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import omit from 'lodash.omit';
import header from '../cypress/fixtures/header.json';
import galleries from '../cypress/fixtures/galleries.json';
import partial from '../cypress/fixtures/partial';
import * as Accessa from '../src';
import Content from '../cypress/fixtures/content';
import { Default as LegendDefault } from '../src/Lists/Legend/Legend.stories.jsx';
import { DarkMode } from '../src/Lists/Archer/Archer.stories.jsx';
import { EstateFooter } from '../src/Footers/Footers.stories.jsx';

export default {
  title: 'Accessa/Service pages',
  decorators: [withA11y],
};

export const ExampleOne = () => (
  <Container maxWidth="xl" disableGutters component="main">
    <Accessa.Headers.Billboard
      {...omit(header, ['subtitle'])}
    />
    <Accessa.Sections.Block>
      <Content />
    </Accessa.Sections.Block>
    <Container maxWidth="md">
      <Grid spacing={3} container justify="space-between">
        <Grid item xs>
          <LegendDefault />
        </Grid>
        <Grid item md={4} sm={12}>
          <DarkMode />
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="xl">
      <DarkMode />
    </Container>
    <Container>
      <Accessa.Features.Field
        title={header.subtitle}
        data={galleries.map((item) => ({
          onClick: () => alert('Click'),
          fluid: {
            src: item.src,
          },
          style: {
            height: 270,
            width: '100%',
          },
          ...item,
        }))}
      />
    </Container>
    <Container>
      <Box
        bgcolor="grey.900"
        color="primary.contrastText"
        my={2}
        p={2}
      >
        <Accessa.CallToActions.Leader {...partial} />
      </Box>
    </Container>
    <EstateFooter />
  </Container>
);
