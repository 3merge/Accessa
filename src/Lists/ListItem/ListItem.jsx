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
    <div className={classes.list}>
      <ListItem button onClick={onClick}>
        <ChevronRight />
        <ListItemText primary={listItemText} />
      </ListItem>
    </div>
  ) : (
    <div className={classes.list}>
      <ListItem component="li">
        <ChevronRight />
        <ListItemText primary={listItemText} />
      </ListItem>
    </div>
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
