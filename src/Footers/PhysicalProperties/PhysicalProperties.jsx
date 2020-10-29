import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import {
  Divider,
  Grid,
  Typography,
  Box,
  Container,
} from '@material-ui/core';
import useStyles from './useStyles';

const Property = ({ subtitle, body1, body2 }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h4"
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
  body1: PropTypes.node.isRequired,
  body2: PropTypes.node,
};

const PhysicalProperties = ({ logo, properties }) => {
  return (
    <Container>
      {logo && (
        <Image
          {...logo}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      )}
      <Box mt={2} mb={4}>
        <Divider aria-hidden />
      </Box>
      <Grid container spacing={7}>
        {properties.map((prop) => (
          <Grid item key={prop.subtitle}>
            <Property {...prop} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

PhysicalProperties.defaultProps = {
  logo: {},
};

PhysicalProperties.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  logo: PropTypes.object,
  properties: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.node),
  ).isRequired,
};

export default PhysicalProperties;
