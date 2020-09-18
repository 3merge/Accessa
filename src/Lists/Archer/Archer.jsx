import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemWrapper from '../ListItemWrapper';
import useStyles from '../useStyles';
import { renderListSafely } from '../../Hocs';

const Archer = ({
  subheader,
  darkMode,
  underline,
  lists,
}) => {
  const classes = useStyles({
    darkMode,
    underline,
  });

  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader
          color="inherit"
          className={classes.root}
          component="li"
        >
          {subheader}
        </ListSubheader>
      }
    >
      <ListItemWrapper
        lists={lists}
        darkMode={darkMode}
        underline={underline}
      />
    </List>
  );
};

Archer.defaultProps = {
  underline: false,
  darkMode: false,
  subheader: '',
  lists: [],
};

Archer.propTypes = {
  darkMode: PropTypes.bool,
  underline: PropTypes.bool,
  subheader: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  lists: PropTypes.array,
};

export default renderListSafely(Archer);
