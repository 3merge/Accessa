import React from 'react';
import { Grid } from '@material-ui/core';
import Menu from './Menu';
import useStyles from './useStyles';

const Blinds = () => {
  const { ul } = useStyles();
  const [currentMenu, setCurrentMenu] = React.useState(-1);

  const setMenu = (index) => () => setCurrentMenu(index);

  const resetMenu = () => setCurrentMenu(-1);

  const escape = (e) => {
    console.log('hit');
    e.key === 'escape' ? resetMenu() : null;
  };

  return (
    <div style={{ backgroundColor: 'tomato' }}>
      <nav>
        <Grid container component="ul" className={ul}>
          {[1, 2].map((x, i) => (
            <Menu
              key={i}
              setMenu={setMenu(i)}
              index={i}
              resetMenu={resetMenu}
              currentMenu={currentMenu}
              onKeyDown={escape}
            />
          ))}
        </Grid>
      </nav>
    </div>
  );
};

export default Blinds;
