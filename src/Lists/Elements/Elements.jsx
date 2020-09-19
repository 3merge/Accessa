import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { addLeadingZero } from '../helpers';
import Element from '../Element';
import useStyles from './useStyles';
import renderListSafely from '../../Hocs';

const Elements = ({ lists }) => {
  const classes = useStyles();
  return (
    <List className={classes.wrapper}>
      {lists.map((list, i) => (
        <Element
          isFirst={i === 0}
          key={i}
          subtitle1={addLeadingZero(i)}
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

export default renderListSafely(Elements);
