import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import {
  Grid,
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import useStyles from './useStyles';

const Panels = ({
  swap,
  buttonText,
  onClick,
  title,
  body,
  image,
  secondaryButton,
}) => {
  const classes = useStyles({ swap });

  return (
    <Grid container>
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
        className={[classes.textWrapper, classes.swap]}
      >
        <Box p={5}>
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="body1"
            className={classes.body}
          >
            {body}
          </Typography>
          {buttonText ? (
            <Button
              color={
                secondaryButton ? 'secondary' : 'primary'
              }
              variant="contained"
              onClick={onClick}
            >
              {buttonText}
            </Button>
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
};

Panels.defaultProps = {
  swap: false,
  buttonText: '',
  secondaryButton: false,
  onClick: () => {},
};

Panels.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  swap: PropTypes.bool,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  secondaryButton: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
};

export default Panels;
