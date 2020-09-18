import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import omit from 'lodash.omit';
import header from '../cypress/fixtures/header.json';
import * as Accessa from '../src';
import { EstateFooter } from '../src/Footers/Footers.stories.jsx';
import { ElementList } from '../src/Lists/Elements/Elements.stories.jsx';
import { AuthorityLogos } from '../src/Galleries/galleries.stories.jsx';
import partial from '../cypress/fixtures/partial';

export default {
  title: 'Accessa/Information pages',
  decorators: [withA11y],
};

export const ExampleOne = () => (
  <Container maxWidth="xl" disableGutters component="main">
    <Accessa.Headers.Billboard
      {...omit(header, ['subtitle'])}
    />
    <Accessa.Sections.Block>
      <ElementList />
    </Accessa.Sections.Block>
    <Box my={4} textAlign="center">
      <AuthorityLogos />
    </Box>
    <Accessa.CallToActions.Leader {...partial} />
    <EstateFooter />
  </Container>
);
