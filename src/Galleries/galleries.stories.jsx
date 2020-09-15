import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Authorities from './Authorities';
import logo1 from '../../cypress/fixtures/logo-12.svg';
import logo2 from '../../cypress/fixtures/logo-16.svg';
import logos from '../../cypress/fixtures/logos.json';

const data = logos.map((x, i) => ({
  ...x,
  fluid: { src: i % 2 === 0 ? logo1 : logo2 },
}));

export default {
  title: 'Galleries',
  decorators: [withA11y],
};

export const AuthorityLogos = () => {
  return (
    <Authorities
      logos={data}
      title="Our Certifications, Awards & Associations"
    />
  );
};
