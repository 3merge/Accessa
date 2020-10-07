import React from 'react';
import { Grid } from '@material-ui/core';

const Menu = () => {
  const [hidden, setHidden] = React.useState(true);
  return (
    <Grid item component="li">
      <Grid
        container
        component="ul"
        onMouseOver={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <Grid item xs={12} component="li">
          Top Menu
        </Grid>
        <Grid item xs={12} component="li" hidden={hidden}>
          item 1
        </Grid>
        <Grid item xs={12} component="li" hidden={hidden}>
          item 2
        </Grid>
      </Grid>
    </Grid>
  );
};

const Blinds = () => {
  return (
    <div style={{ backgroundColor: 'tomato' }}>
      <nav>
        <Grid container component="ul">
          <Menu />
          <Menu />
        </Grid>
      </nav>
    </div>
  );
};

export default Blinds;
