import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const Checker = ({ title, main, children, color }) => {
  const classes = useStyles({
    color,
  });

  return (
    <Box className={classes.root} p={4} position="relative">
      <Box className={classes.background} />
      <Box position="relative">
        <Typography color="inherit" variant="overline">
          {title}
        </Typography>
        <Typography
          className={classes.main}
          color="inherit"
          component="p"
          variant="h4"
        >
          {main}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

Checker.defaultProps = {};

Checker.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Checker;
