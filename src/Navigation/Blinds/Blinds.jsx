import React from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';

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
            <Dropdown key={x.main} item={x} />
          ))}
        </Grid>
      </nav>
    </div>
  );
};

export default Blinds;
