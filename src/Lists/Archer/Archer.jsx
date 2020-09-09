import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

const ToggleCollapse = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return children({ toggle, setToggle });
};

const ListItemWithCollapse = ({
  toggle,
  setToggle,
  underline,
  darkMode,
}) => {
  const useStyles = makeStyles(() => ({
    root: ({ root }) => ({
      // eslint-disable-next-line no-nested-ternary
      borderBottom: root.underline
        ? darkMode
          ? '1px solid #fff'
          : '1px solid #000'
        : '1px solid transparent',
    }),
  }));

  const classes = useStyles({
    root: { underline, darkMode },
  });

  return (
    <div className={classes.root}>
      <ListItem button onClick={() => setToggle(!toggle)}>
        <ListItemText primary="Here" />
        {toggle ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={toggle} unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText secondary="Nested item" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

const Archer = ({ darkMode, underline }) => {
  const useStyles = makeStyles(() => ({
    root: ({ root }) => ({
      backgroundColor: root.darkMode ? 'grey' : '#fff',
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
      <ToggleCollapse>
        {({ toggle, setToggle }) => (
          <ListItemWithCollapse
            toggle={toggle}
            setToggle={setToggle}
            underline={underline}
            darkMode={darkMode}
          />
        )}
      </ToggleCollapse>
      <ToggleCollapse>
        {({ toggle, setToggle }) => (
          <ListItemWithCollapse
            toggle={toggle}
            setToggle={setToggle}
            underline={underline}
            darkMode={darkMode}
          />
        )}
      </ToggleCollapse>
    </List>
  );
};

export default Archer;
