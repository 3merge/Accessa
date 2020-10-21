import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Grid, Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const Panel = ({ swap, title, body, image, children }) => {
  const classes = useStyles({ swap });

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} sm={6}>
        <Image
          {...image}
          fadeIn
          objectFit="cover"
          className={classes.imageWrapper}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className={[classes.textWrapper, classes.swap].join(
          ' ',
        )}
      >
        <Box p={5}>
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className={classes.body}
          >
            {body}
          </Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

Panel.defaultProps = {
  swap: false,
  children: null,
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  swap: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default Panel;
