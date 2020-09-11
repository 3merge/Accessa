import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import {
  Box,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const DigitalProperties = ({ company, socials }) => {
  const { breakpoints } = useTheme();

  const useStyles = makeStyles(() => ({
    iconWrapper: {
      marginTop: '15px',
      [breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box mt={5}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid container item sm={12} md={8} spacing={4}>
          <Grid item>
            <Typography variant="body1">
              {company}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
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
