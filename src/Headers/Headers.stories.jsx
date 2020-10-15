import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs';
import header from '../../cypress/fixtures/header';
import * as Headers from '.';

export default {
  title: 'Headers',
  decorators: [withA11y, withKnobs],
};

export const Billboard = () => (
  <Headers.Billboard
    title={text('Title', header.title)}
    subtitle={text('Subtitle', header.subtitle)}
  />
);

export const Mast = () => (
  <Headers.Mast
    title={text('Title', header.title)}
    subtitle={text('Subtitle', header.subtitle)}
    size={select(
      'Size',
      ['small', 'medium', 'large'],
      'medium',
    )}
  />
);
