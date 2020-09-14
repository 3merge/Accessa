import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';
import useStyles from '../useStyles';

const List = ({
  darkMode,
  underline,
  listItemText,
  onClick,
}) => {
  const classes = useStyles({
    darkMode,
    underline,
  });

  return onClick ? (
    <ListItem
      onClick={onClick}
      component="li"
      className={[classes.list, classes.listButton]}
    >
      <ChevronRight />
      <ListItemText primary={listItemText} />
    </ListItem>
  ) : (
    <ListItem component="li" className={classes.list}>
      <ChevronRight />
      <ListItemText primary={listItemText} />
    </ListItem>
  );
};

List.defaultProps = {
  darkMode: false,
  underline: false,
  onClick: undefined,
};

List.propTypes = {
  darkMode: PropTypes.bool,
  underline: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default List;
