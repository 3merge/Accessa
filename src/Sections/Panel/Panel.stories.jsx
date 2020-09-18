import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Panel from './Panel';
import partial from '../../../cypress/fixtures/partial';

export default {
  title: 'Sections/Panel',
  decorators: [withA11y],
};

const contents = {
  title: partial.title,
  body: partial.description,
  image: {
    alt: 'placeholder',
    fluid: {
      src: 'https://source.unsplash.com/random',
    },
  },
};

export const PanelDefault = () => {
  return <Panel {...contents} />;
};

export const PanelSwap = () => {
  return <Panel {...contents} swap />;
};
