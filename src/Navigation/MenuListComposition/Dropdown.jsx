import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';
import { getButtonProps } from '../Blinds/helpers';

const Dropdown = (item) => {
  const cls = useStyles();
  const theme = useTheme();

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
          <ListItem
            dense
            key={x.label}
            style={{ padding: 0 }}
          >
            <Button
              {...getButtonProps(x, {
                backgroundColor:
                  theme?.palette?.primary?.main,
                textDecoration: 'none',
              })}
              className={cls.link}
              style={{ textAlign: 'center' }}
              fullWidth
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
