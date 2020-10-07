import React from 'react';
import { Grid, Collapse } from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';

const Menu = ({ setMenu, reset, currentMenu, index }) => {
  const { ul } = useStyles();

  return (
    <Grid item component="li">
      <Grid
        container
        onMouseOver={setMenu}
        onMouseLeave={reset}
        onFocus={setMenu}
        onBlur={reset}
      >
        <Grid item xs={12} tabIndex={0}>
          Top Menu
        </Grid>
        <Collapse in={currentMenu === index}>
          <ul className={ul}>
            <Grid item xs={12} component="li">
              <Link to="/">item 1</Link>
            </Grid>
            <Grid
              item
              xs={12}
              component="li"
              onBlur={reset}
            >
              <Link to="/">item 2</Link>
            </Grid>
          </ul>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Menu;
