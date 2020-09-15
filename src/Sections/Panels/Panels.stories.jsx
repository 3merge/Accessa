import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Panels from './Panels';

export default {
  title: 'Sections/Panels',
  decorators: [withA11y],
};

const contents = [
  {
    title: 'Hello World',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    buttonText: 'LEARN MORE',
    onClick: () => {},
    image: {
      alt: 'placeholder',
      fluid: {
        src: 'https://source.unsplash.com/random',
      },
    },
  },
];

export const PanelsExample = () => {
  return <Panels {...contents[0]} />;
};

export const PanelsSwap = () => {
  return <Panels {...contents[0]} swap />;
};
