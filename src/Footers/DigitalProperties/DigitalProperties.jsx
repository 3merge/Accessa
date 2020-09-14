import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import { Box, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const DigitalProperties = ({ company, socials }) => {
  const classes = useStyles();

  return (
    <Box mt={5} className={classes.wrapper}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid container item sm={12} md={8} spacing={4}>
          <Grid item>
            <Typography variant="body1" color="inherit">
              {company}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="inherit">
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.iconWrapper}>
          {socials.map((sm) => (
            <SocialIcon
              url={sm}
              key={sm}
              rel="noreferrer noopener"
              target="_blank"
              style={{
                margin: '0.25rem',
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

DigitalProperties.propTypes = {
  company: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DigitalProperties;
