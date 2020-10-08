import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Grid } from '@material-ui/core';
import Dropdown from './Dropdown';
import useStyles from './useStyles';

const DropdownNavigation = ({ item }) => {
  const { a } = useStyles();
  const shouldRenderDropdown =
    Array.isArray(item.subitems) &&
    item.subitems.length > 0;

  return (
    <Grid item component="li">
      {!shouldRenderDropdown ? (
        <Link to={item.path} className={a}>
          {item.main}
        </Link>
      ) : (
        <Dropdown item={item} />
      )}
    </Grid>
  );
};

DropdownNavigation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default DropdownNavigation;
