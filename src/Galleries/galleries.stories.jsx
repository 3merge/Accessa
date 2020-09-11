import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Authorities from './Authorities';
import logos from '../../cypress/fixtures/logos.json';

export default {
  title: 'Galleries',
  decorators: [withA11y],
};

export const AuthorityLogos = () => {
  return (
    <Authorities
      logos={logos}
      title="Our Certifications, Awards & Associations"
    />
  );
};
