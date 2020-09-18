import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import SonusSection from './Sonus';
import { articles } from '../../../cypress/fixtures/sections';

export default {
  title: 'Sections/Sonus',
  decorators: [withA11y],
};

export const Sonus = () => (
  <SonusSection data={articles} maximumColumnCount={2} />
);
