import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemWithNests from '../ListItemWithNests';
import useStyles from '../useStyles';

const Archer = ({
  subheader,
  darkMode,
  underline,
  lists,
}) => {
  const classes = useStyles({ darkMode, underline });

  if (!Array.isArray(lists) || lists.length === 0)
    return null;

  return (
    <List
      className={classes.root}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          color="inherit"
          classNames={classes.root}
          component="div"
        >
          {subheader}
        </ListSubheader>
      }
    >
      {lists.map((item) => (
        <ListItemWithNests
          key={item.listItemText}
          underline={underline}
          darkMode={darkMode}
          listItemText={item.listItemText}
          nestedItems={item.nestedItems}
        />
      ))}
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

export default Archer;
