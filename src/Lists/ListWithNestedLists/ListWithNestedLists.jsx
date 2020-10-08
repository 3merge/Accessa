import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import useStyles from '../useStyles';

const Arrows = ({ isOpen }) =>
  isOpen ? <ExpandMore /> : <ChevronRight />;

Arrows.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const ListWithNestedLists = ({
  underline,
  listItemText,
  nestedItems,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles({
    underline,
  });

  return (
    <Box component="li">
      <ListItem
        button
        className={classes.list}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Arrows isOpen={isOpen} />
        <ListItemText primary={listItemText} />
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {nestedItems.map(
            ({ listItemText: text, onClick }) => (
              <ListItem
                key={text}
                onClick={onClick}
                className={classes.list}
                tabIndex={0}
              >
                <ListItemText
                  primary={text}
                  className={classes.nestedItems}
                />
              </ListItem>
            ),
          )}
        </List>
      </Collapse>
    </Box>
  );
};

ListWithNestedLists.defaultProps = {
  underline: false,
  nestedItems: [],
};

ListWithNestedLists.propTypes = {
  underline: PropTypes.bool,
  listItemText: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nestedItems: PropTypes.array,
};

export default ListWithNestedLists;
