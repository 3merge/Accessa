import React from 'react';
import { Grid } from '@material-ui/core';
import Menu from './Menu';
import useStyles from './useStyles';

const Blinds = () => {
  const { ul } = useStyles();
  const [currentMenu, setCurrentMenu] = React.useState(-1);

  const setMenu = (index) => () => setCurrentMenu(index);

  const reset = () => setCurrentMenu(-1);

  return (
    <div style={{ backgroundColor: 'tomato' }}>
      <nav>
        <Grid container component="ul" className={ul}>
          {[1, 2].map((x, i) => (
            <Menu
              key={i}
              setMenu={setMenu(i)}
              index={i}
              reset={reset}
              currentMenu={currentMenu}
            />
          ))}
        </Grid>
      </nav>
    </div>
  );
};

export default Blinds;
