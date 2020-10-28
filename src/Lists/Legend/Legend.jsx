import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyle from './useStyle';
import { addLeadingZero } from '../helpers';
import { renderListSafely } from '../../Hocs';

const Legend = ({ lists }) => {
  const cls = useStyle();

  return (
    <List className={cls.root}>
      {lists.map((text, i) => (
        <ListItem
          key={`legendList${i}`}
          className={cls.item}
        >
          <ListItemAvatar
            className={cls.avatarContainer}
            aria-hidden
          >
            <Avatar className={cls.avatar}>
              {addLeadingZero(i)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

Legend.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default renderListSafely(Legend);
