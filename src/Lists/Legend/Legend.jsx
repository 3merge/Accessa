import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyle from './useStyle';

export const addLeadingZero = (val) => {
  const str = String(val);
  return str.length === 1 ? `0${str}` : str;
};

const Legend = ({ items }) => {
  const cls = useStyle();

  return Array.isArray(items) ? (
    <List className={cls.root}>
      {items.map((text, i) => (
        <ListItem key={i} className={cls.item}>
          <ListItemAvatar className={cls.avatarContainer}>
            <Avatar className={cls.avatar}>
              {addLeadingZero(i + 1)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  ) : null;
};

Legend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Legend;
