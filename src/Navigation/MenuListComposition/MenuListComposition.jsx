import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  List,
  ListItem,
} from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';
import { getButtonProps } from '../Blinds/helpers';

export const hasNestItem = (x) =>
  Array.isArray(x.items) && x.items.length > 0;

const MenuListComposition = ({ items }) => {
  const cls = useStyles();

  return (
    <Box component="nav">
      <List className={cls.root}>
        {items.map((x) => (
          <ListItem key={x.label} style={{ width: 'auto' }}>
            {hasNestItem(x) ? (
              <Dropdown {...x} />
            ) : (
              <Button
                {...getButtonProps(x)}
                className={cls.link}
                fullWidth
              >
                {x.label}
              </Button>
            )}
          </ListItem>
        ))}
      </List>
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
