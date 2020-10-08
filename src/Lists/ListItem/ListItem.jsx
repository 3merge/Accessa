import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';
import useStyles from '../useStyles';

const List = ({ underline, listItemText, onClick }) => {
  const classes = useStyles({
    underline,
  });

  return onClick ? (
    <li className={classes.list}>
      <ListItem
        onClick={onClick}
        button
        className={classes.listButton}
      >
        <ChevronRight />
        <ListItemText primary={listItemText} />
      </ListItem>
    </li>
  ) : (
    <ListItem component="li" className={classes.list}>
      <ChevronRight />
      <ListItemText primary={listItemText} />
    </ListItem>
  );
};

List.defaultProps = {
  underline: false,
  onClick: undefined,
};

List.propTypes = {
  underline: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default List;
