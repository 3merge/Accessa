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

const Tree = ({ lists }) => {
  if (!Array.isArray(lists) || lists.length === 0)
    return null;

  const { primary, secondary, wrapper } = useStyles();
  return (
    <List>
      {lists.map((list, i) => (
        <ListItem key={i} className={wrapper}>
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
              <IconButton aria-label="link">
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

export default Tree;
