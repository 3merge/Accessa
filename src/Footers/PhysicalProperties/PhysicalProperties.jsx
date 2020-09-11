import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';

const Property = ({ subtitle, body1, body2 }) => {
  const { palette } = useTheme();

  const useStyles = makeStyles({
    subtitle1: {
      fontWeight: 'bold',
      marginBottom: '15px',
      color: palette.text.secondary,
    },
  });

  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.subtitle1}
        variant="subtitle1"
        gutterBottom
      >
        {subtitle}
      </Typography>
      <Typography variant="body1">{body1}</Typography>
      {body2 ? (
        <Typography variant="body1">{body2}</Typography>
      ) : null}
    </>
  );
};

Property.defaultProps = {
  body2: '',
};

Property.propTypes = {
  subtitle: PropTypes.string.isRequired,
  body1: PropTypes.string.isRequired,
  body2: PropTypes.string,
};

const PhysicalProperties = ({ logo, properties }) => {
  return (
    <Box>
      {logo && (
        <Box borderBottom={1} pb={5} mb={5}>
          <Image
            {...logo}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </Box>
      )}
      <Grid container spacing={7}>
        {properties.map((prop) => (
          <Grid item key={prop.subtitle}>
            <Property {...prop} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

PhysicalProperties.defaultProps = {
  logo: {},
};

PhysicalProperties.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  logo: PropTypes.object,
  properties: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};

export default PhysicalProperties;
