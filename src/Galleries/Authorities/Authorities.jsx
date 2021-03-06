import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import Image from 'gatsby-image';
import useStyles from './useStyles';

const Authorities = ({ title, logos }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      {logos.map((logo, i) => (
        <a
          href={logo.to}
          className={classes.logoWrapper}
          key={logo.alt ? logo.alt.concat(i) : `imgKey${i}`}
        >
          <Image
            imgStyle={{
              objectFit: 'contain',
            }}
            className={classes.logo}
            objectFit="contain"
            {...logo}
            target="_blank"
            rel="noreferrer"
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
