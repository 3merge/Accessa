import React from 'react';
import { Grid, Collapse } from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';

const Dropdown = ({
  item,
  setMenu,
  reset,
  currentMenu,
  index,
}) => {
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
          {item.main}
        </Grid>
        {item.subitems ? (
          <Collapse in={currentMenu === index}>
            <ul className={ul}>
              {item.subitems.map((sub, i) => (
                <Grid
                  item
                  xs={12}
                  component="li"
                  onBlur={
                    i === item.subitems.length - 1
                      ? reset
                      : null
                  }
                >
                  <Link to={sub.path}>{sub.sub}</Link>
                </Grid>
              ))}
            </ul>
          </Collapse>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Dropdown;
