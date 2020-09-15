import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const Checker = ({
  title,
  titleColor,
  main,
  mainColor,
  backgroundColor,
  children,
}) => {
  const classes = useStyles({
    backgroundColor,
    titleColor,
    mainColor,
  });

  return (
    <Box className={classes.root} p={3}>
      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Typography className={classes.main} variant="h4">
        {main}
      </Typography>
      {children}
    </Box>
  );
};

Checker.defaultProps = {
  titleColor: '',
  backgroundColor: '',
  mainColor: '',
};

Checker.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  main: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Checker;
