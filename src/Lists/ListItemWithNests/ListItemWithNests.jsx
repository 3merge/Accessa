import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ToggleNestedLists from '../ToggleNestedLists';
import useStyles from '../useStyles';

const Arrows = ({ isOpen }) =>
  isOpen ? <ExpandLess /> : <ExpandMore />;

Arrows.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const ListItemWithNests = ({
  underline,
  darkMode,
  listItemText,
  nestedItems,
}) => {
  const classes = useStyles({
    darkMode,
    underline,
  });

  return (
    <ToggleNestedLists>
      {({ isOpen, setIsOpen }) => (
        <div className={classes.list}>
          <ListItem
            button
            onClick={() => setIsOpen(!isOpen)}
          >
            <ListItemText primary={listItemText} />
            {nestedItems ? (
              <Arrows isOpen={isOpen} />
            ) : null}
          </ListItem>
          {nestedItems ? (
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
          ) : null}
        </div>
      )}
    </ToggleNestedLists>
  );
};

ListItemWithNests.defaultProps = {
  underline: false,
  darkMode: false,
  nestedItems: [],
};

ListItemWithNests.propTypes = {
  underline: PropTypes.bool,
  darkMode: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nestedItems: PropTypes.array,
};

export default ListItemWithNests;
