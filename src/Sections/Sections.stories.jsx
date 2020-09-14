import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import SonusSection from './Sonus';
import VitosSection from './Vitos';
import Checker from './Checker';
import { articles } from '../../cypress/fixtures/sections';

export default {
  title: 'Sections',
  decorators: [withA11y],
};

export const Sonus = () => (
  <SonusSection data={articles} maximumColumnCount={2} />
);

export const Vitos = () => <VitosSection />;

export const content = {
  title: 'TRAVEL MUCH?',
  main:
    'We have traveled to an average of 5 countries each',
  backgroundColor: 'yellow',
};

export const CheckersSample = () => (
  <Checker {...content} />
);
