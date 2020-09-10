import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from '../useStyles';

const Arrows = ({ isOpen }) =>
  isOpen ? <ExpandLess /> : <ExpandMore />;

Arrows.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const ListWithNestedLists = ({
  underline,
  darkMode,
  listItemText,
  nestedItems,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles({
    darkMode,
    underline,
  });

  return (
    <div className={classes.list}>
      <ListItem button onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={listItemText} />
        <Arrows isOpen={isOpen} />
      </ListItem>
      <Collapse in={isOpen} unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems.map(
            ({ listItemText: text, onClick }) => (
              <ListItem key={text} onClick={onClick}>
                <ListItemText
                  primary={text}
                  className={classes.nestedItems}
                />
              </ListItem>
            ),
          )}
        </List>
      </Collapse>
    </div>
  );
};

ListWithNestedLists.defaultProps = {
  underline: false,
  darkMode: false,
  nestedItems: [],
};

ListWithNestedLists.propTypes = {
  underline: PropTypes.bool,
  darkMode: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nestedItems: PropTypes.array,
};

export default ListWithNestedLists;
