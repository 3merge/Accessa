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
        <Typography
          className={classes.title}
          variant="subtitle1"
          color="inherit"
        >
          {title}
        </Typography>
        <Typography
          className={classes.main}
          variant="h4"
          color="inherit"
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
