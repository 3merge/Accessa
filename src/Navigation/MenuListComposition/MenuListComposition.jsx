import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Paper,
  Box,
  List,
  ListItem,
} from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';
import { getButtonProps } from '../Blinds/helpers';

const hasNestItem = (xs) =>
  Array.isArray(xs.items) && xs.items.length > 0;

const MenuListComposition = ({ items }) => {
  const cls = useStyles();

  return (
    <Box component="nav">
      <Paper>
        <List classes={cls}>
          {items.map((x) =>
            hasNestItem(x) ? (
              <ListItem key={x.label}>
                <Dropdown {...x} />
              </ListItem>
            ) : (
              <ListItem key={x.label}>
                <Button
                  {...getButtonProps(x)}
                  className={cls.link}
                >
                  {x.label}
                </Button>
              </ListItem>
            ),
          )}
        </List>
      </Paper>
    </Box>
  );
};

MenuListComposition.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default MenuListComposition;
