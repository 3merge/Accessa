import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
} from '@material-ui/core';
import useStyles from './useStyles';
import { getButtonProps } from '../Blinds/helpers';

const Dropdown = (item) => {
  const cls = useStyles();

  return (
    <Box className={cls.wrapper}>
      <Button
        {...getButtonProps(item)}
        className={cls.link}
      >
        {item.label}
      </Button>
      <List className={cls.nested} component={Paper}>
        {item.items.map((x) => (
          <ListItem>
            <Button
              {...getButtonProps(x)}
              className={cls.link}
            >
              {x.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dropdown;
