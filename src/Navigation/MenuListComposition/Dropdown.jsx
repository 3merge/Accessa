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

const Dropdown = ({ item, maxDepth, maxColumns }) => {
  const theme = useTheme();
  const isMultiColumns = item.items.length - maxDepth > 0;
  const implicit =
    item.items.length - maxDepth * maxColumns;

  const columns = maxColumns;
  const rows =
    implicit === 0
      ? maxDepth
      : maxDepth + Math.ceil(implicit / maxColumns);

  console.log('column: ', columns, 'rows: ', rows);
  const cls = useStyles({ isMultiColumns, columns, rows });

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
