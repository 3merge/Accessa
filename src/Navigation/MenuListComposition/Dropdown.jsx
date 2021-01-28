import React from 'react';
import { Link } from '@reach/router';
import { Box, List, ListItem } from '@material-ui/core';
import useStyles from './useStyles';

const Dropdown = (item) => {
  const cls = useStyles();

  return (
    <Box className={cls.wrapper}>
      <Link to={item.href} className={cls.link}>
        {item.label}
      </Link>
      <Box pt={2}>
        <List className={cls.nested}>
          {item.items.map((x) => (
            <ListItem disableGutters>
              <Link to={x.href} className={cls.link}>
                {x.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Dropdown;
