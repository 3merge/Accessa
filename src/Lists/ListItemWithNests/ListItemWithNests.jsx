import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const ListItemWithNests = ({
  isOpen,
  setIsOpen,
  underline,
  darkMode,
  listItemText,
  nestedItems,
}) => {
  const Arrows = ({ isOpen }) =>
    isOpen ? <ExpandLess /> : <ExpandMore />;

  const useStyles = makeStyles(() => ({
    root: ({ darkMode, underline }) => ({
      // eslint-disable-next-line no-nested-ternary
      borderBottom: underline
        ? darkMode
          ? '1px solid #fff'
          : '1px solid #000'
        : '1px solid transparent',
    }),
    primary: ({ darkMode }) => ({
      color: darkMode ? '#fff' : '#000',
    }),
    secondary: ({ darkMode }) => ({
      color: darkMode ? '#fff' : '#000',
    }),
  }));

  const classes = useStyles({
    darkMode,
    underline,
  });
  return (
    <div className={classes.root}>
      <ListItem button onClick={() => setIsOpen(!isOpen)}>
        <ListItemText
          className={classes.primary}
          primary={listItemText}
        />
        {nestedItems ? <Arrows isOpen={isOpen} /> : null}
      </ListItem>
      {nestedItems ? (
        <Collapse in={isOpen} unmountOnExit>
          <List component="div" disablePadding>
            {nestedItems.map(
              ({ listItemText, onClick }) => (
                <ListItem
                  key={listItemText}
                  onClick={onClick}
                >
                  <ListItemText
                    primary={listItemText}
                    className={classes.secondary}
                  />
                </ListItem>
              ),
            )}
          </List>
        </Collapse>
      ) : null}
    </div>
  );
};

export default ListItemWithNests;
