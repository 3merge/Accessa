import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
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
      <List className={cls.nested}>
        {item.items.map((x) => (
          <ListItem key={x.label}>
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
