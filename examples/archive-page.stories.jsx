import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import omit from 'lodash.omit';
import header from '../cypress/fixtures/header.json';
import * as Accessa from '../src';
import { GroceryFooter } from '../src/Footers/Footers.stories.jsx';
import {
  PanelDefault,
  PanelSwap,
} from '../src/Sections/Panel/Panel.stories.jsx';

export default {
  title: 'Accessa/Archive pages',
  decorators: [withA11y],
};

export const ExampleOne = () => (
  <Container maxWidth="xl" disableGutters component="main">
    <Accessa.Headers.Mast {...omit(header, ['subtitle'])} />
    <Container maxWidth="lg">
      <Box my={4}>
        <PanelDefault />
      </Box>
      <Box my={4}>
        <PanelSwap />
      </Box>
    </Container>
    <GroceryFooter />
  </Container>
);
