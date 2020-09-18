import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import VitosSection from './Vitos';

export default {
  title: 'Sections/Vitos',
  decorators: [withA11y],
};

export const Vitos = () => <VitosSection />;
