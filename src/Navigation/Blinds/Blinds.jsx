import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';
import DropdownNavigation from './DropdownNavigation';

const Blinds = ({ items }) => {
  const { ul } = useStyles();

  return (
    <div style={{ backgroundColor: 'tomato' }}>
      <nav>
        <Grid
          container
          component="ul"
          className={ul}
          spacing={5}
        >
          {items.map((x) => (
            <DropdownNavigation key={x.main} item={x} />
          ))}
        </Grid>
      </nav>
    </div>
  );
};

export default Blinds;
