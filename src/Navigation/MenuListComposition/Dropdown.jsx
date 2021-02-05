import React from 'react';
import PropTypes from 'prop-types';
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
  const nestedItemLength = item.items.length;
  const isMultiColumns = nestedItemLength - maxDepth > 0;
  const implicit = nestedItemLength - maxDepth * maxColumns;

  const rows =
    implicit === 0
      ? maxDepth
      : maxDepth + Math.ceil(implicit / maxColumns);

  const cls = useStyles({
    isMultiColumns,
    columns: maxColumns,
    rows,
  });

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

Dropdown.defaultProps = {
  maxDepth: 3,
  maxColumns: 3,
};

Dropdown.propTypes = {
  maxDepth: PropTypes.number,
  maxColumns: PropTypes.number,
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Dropdown;
