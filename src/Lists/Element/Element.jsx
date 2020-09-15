import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
} from '@material-ui/core';
import useStyles from './useStyles';

const Element = ({
  alt,
  src,
  subtitle1,
  subtitle2,
  body,
  isFirst,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={[
        classes.listWrapper,
        isFirst ? classes.first : '',
      ]}
    >
      {alt && src ? (
        <ListItemAvatar>
          <Avatar
            className={classes.avatarImg}
            alt="place holder"
            src="https://source.unsplash.com/random"
          />
        </ListItemAvatar>
      ) : null}
      <Box>
        <Typography
          variant="subtitle1"
          className={classes.subtitle1}
        >
          {subtitle1}
        </Typography>
        <Typography
          variant="subtitle2"
          className={classes.subtitle2}
        >
          {subtitle2}
        </Typography>
        <Typography
          variant="body1"
          className={classes.body1}
        >
          {body}
        </Typography>
      </Box>
    </ListItem>
  );
};

Element.defaultProps = {
  alt: '',
  src: '',
  isFirst: false,
};

Element.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  subtitle1: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
};

export default Element;
