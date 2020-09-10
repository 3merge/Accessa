import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

  return (
    <div className={classes.list}>
      <ListItem button onClick={onClick}>
        <ListItemText primary={listItemText} />
      </ListItem>
    </div>
  );
};

List.defaultProps = {
  darkMode: false,
  underline: false,
};

List.propTypes = {
  darkMode: PropTypes.bool,
  underline: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default List;
