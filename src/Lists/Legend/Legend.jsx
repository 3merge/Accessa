import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyle from './useStyle';
import { generateLeading } from '../helpers';
import { renderListSafely } from '../../Hocs';

const Legend = ({ lists }) => {
  const cls = useStyle();

  return (
    <List className={cls.root}>
      {lists.map((text, i) => (
        <ListItem key={i} className={cls.item}>
          <ListItemAvatar className={cls.avatarContainer}>
            <Avatar className={cls.avatar}>
              {generateLeading(i)}
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
