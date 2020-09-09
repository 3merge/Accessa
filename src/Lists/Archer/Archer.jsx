import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import ToggleNestedLists from '../ToggleNestedLists';
import ListItemWithNests from '../ListItemWithNests';

const nestedItems = [
  {
    listItemText: 'Nested',
    onClick: () => console.log('Nested'),
  },
  {
    listItemText: 'Wow',
    onClick: () => console.log('Wow'),
  },
];

const lists = [
  {
    listItemText: 'Hello',
    nestedItems,
  },
  {
    listItemText: 'World',
    nestedItems,
  },
];

const Archer = ({ darkMode, underline }) => {
  const useStyles = makeStyles(() => ({
    root: ({ root }) => ({
      backgroundColor: root.darkMode ? '#000' : '#fff',
    }),
  }));

  const classes = useStyles({ root: { darkMode } });

  return (
    <List
      className={classes.root}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div">List</ListSubheader>
      }
    >
      {lists.map((item) => (
        <ToggleNestedLists>
          {({ isOpen, setIsOpen }) => (
            <ListItemWithNests
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              underline={underline}
              darkMode={darkMode}
              listItemText={item.listItemText}
              nestedItems={item.nestedItems}
            />
          )}
        </ToggleNestedLists>
      ))}
    </List>
  );
};

export default Archer;
