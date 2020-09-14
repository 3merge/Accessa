import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: ({ backgroundColor }) => ({
    backgroundColor,
  }),
  title: ({ titleColor }) => ({
    fontWeight: 'bold',
    color: titleColor || palette.text.primary,
  }),
  main: {
    fontWeight: 'bold',
  },
}));

const Checker = ({
  title,
  titleColor,
  main,
  backgroundColor,
}) => {
  const classes = useStyles({
    backgroundColor,
    titleColor,
  });
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      p={3}
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
