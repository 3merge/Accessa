import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import SonusSection from './Sonus';
import VitosSection from './Vitos';
import { articles } from '../../cypress/fixtures/sections';

export default {
  title: 'Sections',
  decorators: [withA11y],
};

export const Sonus = () => (
  <SonusSection data={articles} maximumColumnCount={2} />
);

export const Vitos = () => <VitosSection />;
