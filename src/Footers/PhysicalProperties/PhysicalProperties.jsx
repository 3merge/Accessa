import React from 'react';
import Image from 'gatsby-image';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subtitle1: { fontWeight: 'bold', marginBottom: '15px' },
});

const Property = ({ subtitle, body1, body2 }) => {
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
      <Grid container spacing={10}>
        {properties.map((prop) => (
          <Grid item key={prop.subtitle}>
            <Property {...prop} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default PhysicalProperties;
