import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import PhysicalProperties from '../PhysicalProperties';
import DigitalProperties from '../DigitalProperties';

const Estate = ({
  logo,
  properties,
  socials,
  company,
  text,
  path,
}) => {
  return (
    <Box component="footer">
      <PhysicalProperties
        logo={logo}
        properties={properties}
      />
      <DigitalProperties
        company={company}
        socials={socials}
        text={text}
        path={path}
      />
    </Box>
  );
};

Estate.defaultProps = {
  logo: {},
  socials: [],
  text: '',
  path: '',
};

Estate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  logo: PropTypes.object,
  properties: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
  socials: PropTypes.arrayOf(PropTypes.string),
  company: PropTypes.string.isRequired,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default Estate;
