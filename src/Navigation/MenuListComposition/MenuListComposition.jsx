import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import {
  Button,
  MenuList,
  MenuItem,
  Paper,
  Box,
  Fade,
  Popover,
  List,
  ListItem,
} from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';

const isNested = (xs) =>
  Array.isArray(xs.items) && xs.items.length > 0;

const MenuListComposition = ({ items }) => {
  const cls = useStyles();

  return (
    <Box component="nav">
      <List classes={cls}>
        {items.map((x) =>
          isNested(x) ? (
            <ListItem key={x.label}>
              <Dropdown {...x} />
            </ListItem>
          ) : (
            <ListItem key={x.label}>
              <Box pb={2}>
                <Link to={x.href} className={cls.link}>
                  {x.label}
                </Link>
              </Box>
            </ListItem>
          ),
        )}
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
