import React from 'react';
import { Link } from '@reach/router';
import { Grid } from '@material-ui/core';

const renderDropdown = (Dropdown) => {
  return ({ item }) => {
    const [active, setActive] = React.useState(false);
    const activate = () => setActive(true);
    const deactivate = () => setActive(false);

    const shouldRenderDropdown =
      Array.isArray(item.subitems) &&
      item.subitems.length > 0;

    return (
      <Grid item component="li">
        <Grid
          container
          onMouseOver={activate}
          onMouseLeave={deactivate}
          onFocus={activate}
          onBlur={deactivate}
        >
          {!shouldRenderDropdown ? (
            <Grid item xs={12}>
              <Link tabIndex={0} to={item.path}>
                {item.main}
              </Link>
            </Grid>
          ) : (
            <Dropdown
              item={item}
              active={active}
              deactivate={deactivate}
            />
          )}
        </Grid>
      </Grid>
    );
  };
};

export default renderDropdown;
