import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';
import DropdownNavigation from './DropdownNavigation';

const Blinds = ({ items }) => {
  const { ul, nav } = useStyles();

  return (
    <nav className={nav}>
      <Grid
        container
        component="ul"
        className={ul}
        spacing={5}
      >
        {items.map((x) => (
          <DropdownNavigation key={x.main} item={x} />
        ))}
      </Grid>
    </nav>
  );
};

Blinds.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.string.isRequired,
      path: PropTypes.string,
      subitems: PropTypes.arrayOf(
        PropTypes.shape({
          sub: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default Blinds;
