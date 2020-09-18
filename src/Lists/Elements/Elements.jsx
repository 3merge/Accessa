import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { addLeadingZero } from '../helpers';
import Element from '../Element';
import useStyles from './useStyles';

const Elements = ({ lists }) => {
  if (!Array.isArray(lists) || lists.length === 0)
    return null;

  const classes = useStyles();
  return (
    <List className={classes.wrapper}>
      {lists.map((list, i) => (
        <Element
          isFirst={i === 0}
          key={i}
          subtitle1={addLeadingZero(i + 1)}
          {...list}
        />
      ))}
    </List>
  );
};

Elements.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};

export default Elements;
