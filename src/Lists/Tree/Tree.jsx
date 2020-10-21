import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import useStyles from './useStyles';
import { renderListSafely } from '../../Hocs';

export const Tree = ({ lists }) => {
  const { primary, secondary, wrapper, btn } = useStyles();
  return (
    <List>
      {lists.map((list, i) => (
        <ListItem key={list.title + i} className={wrapper}>
          <div>
            <ListItemText
              disableTypography
              className={secondary}
              primary={list.title}
            />
            <ListItemText
              disableTypography
              className={primary}
              primary={list.body}
            />
          </div>
          <div>
            <ListItemSecondaryAction>
              <IconButton aria-label="link" className={btn}>
                <ChevronRight onClick={list.onClick} />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

Tree.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default renderListSafely(Tree);
