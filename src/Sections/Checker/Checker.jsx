import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: ({ backgroundColor }) => ({
    backgroundColor,
  }),
  title: {
    fontWeight: 'bold',
  },
  main: {
    fontWeight: 'bold',
  },
}));

const Checker = ({ title, main, backgroundColor }) => {
  const classes = useStyles({ backgroundColor });
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        className={classes.title}
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Typography className={classes.main} variant="h5">
        {main}
      </Typography>
    </Box>
  );
};

export default Checker;
