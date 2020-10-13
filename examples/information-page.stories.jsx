import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import omit from 'lodash.omit';
import header from '../cypress/fixtures/header.json';
import * as Accessa from '../src';
import { EstateFooter } from '../src/Footers/Footers.stories.jsx';
import { ElementList } from '../src/Lists/Elements/Elements.stories.jsx';
import partial from '../cypress/fixtures/partial';
import Authorities from '../src/Galleries/Authorities'
import logo1 from '../cypress/fixtures/logo-12.svg';
import logo2 from '../cypress/fixtures/logo-16.svg';
import logos from '../cypress/fixtures/logos.json';

const data = logos.map((x, i) => ({
  ...x,
  fluid: { src: i % 2 === 0 ? logo1 : logo2 },
}));

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
      <Authorities
        title="Our Certifications, Awards & Associations"
        logos={data}
      />
    </Box>
    <Accessa.CallToActions.Leader {...partial} />
    <EstateFooter />
  </Container>
);
