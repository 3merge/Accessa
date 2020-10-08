import React from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';

const Blinds = ({ items }) => {
  const { ul } = useStyles();
  const [currentMenu, setCurrentMenu] = React.useState(-1);

  const setMenu = (index) => () => setCurrentMenu(index);

  const reset = () => setCurrentMenu(-1);

  return (
    <div style={{ backgroundColor: 'tomato' }}>
      <nav>
        <Grid container component="ul" className={ul}>
          {items.map((x, i) => (
            <Dropdown
              key={i}
              item={x}
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
