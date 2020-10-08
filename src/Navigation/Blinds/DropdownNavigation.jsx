import React from 'react';
import { Link } from '@reach/router';
import { Grid } from '@material-ui/core';
import Dropdown from './Dropdown';

const DropdownNavigation = ({ item }) => {
  const shouldRenderDropdown =
    Array.isArray(item.subitems) &&
    item.subitems.length > 0;

  return (
    <Grid item component="li">
      {!shouldRenderDropdown ? (
        <Grid item xs={12}>
          <Link tabIndex={0} to={item.path}>
            {item.main}
          </Link>
        </Grid>
      ) : (
        <Dropdown item={item} />
      )}
    </Grid>
  );
};

export default DropdownNavigation;
