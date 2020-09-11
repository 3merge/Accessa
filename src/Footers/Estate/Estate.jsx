import React from 'react';
import { Box } from '@material-ui/core';
import PhysicalProperties from '../PhysicalProperties';

const properties = [
  {
    subtitle: 'LOCATION',
    body1: '405 Lake Road',
    body2: 'Bowmanville ON L1C 4P8',
  },
  {
    subtitle: 'CONTACT',
    body1: 'crg@canadarubbergroup.com',
    body2: '1.88.668.0646',
  },
];

const logo = {
  fluid: {
    src: 'https://source.unsplash.com/random',
  },
  alt: 'placeholder',
  style: {
    width: '150px',
    height: '150px',
  },
};

const Estate = () => {
  return (
    <Box component="footer">
      <PhysicalProperties
        logo={logo}
        properties={properties}
      />
    </Box>
  );
};

export default Estate;
