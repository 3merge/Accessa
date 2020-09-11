import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'gatsby-image';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 'bold',
  },
  grayScaled: {
    filter: 'grayscale(100%)',
  },
  logo: {
    filter: 'grayscale(100%)',
    height: '70px',
    objectFit: 'cover',
    width: 'auto',
    minWidth: '100px',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'filter .5s ease-out',

    '&:hover': {
      filter: 'grayscale(0%)',
    },
  },
}));

const Authorities = ({ title, logos }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Grid container spacing={3}>
        {logos.map((logo) => (
          <Grid item>
            <a href={logo.to}>
              <Image
                className={classes.logo}
                key={logo.alt}
                {...logo}
              />
            </a>
          </Grid>
        ))}
      </Grid>
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
