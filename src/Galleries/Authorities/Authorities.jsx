import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import Image from 'gatsby-image';
import useStyles from './useStyles';

const Authorities = ({ title, logos }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      {logos.map((logo) => (
        <a href={logo.to} className={classes.logoWrapper}>
          <Image
            className={classes.logo}
            key={logo.alt}
            {...logo}
          />
        </a>
      ))}
    </Box>
  );
};

Authorities.defaultProps = {
  title: '',
};

Authorities.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  logos: PropTypes.array.isRequired,
};

export default Authorities;
