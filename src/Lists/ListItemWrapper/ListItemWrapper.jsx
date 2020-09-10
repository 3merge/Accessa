import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import ListWithNestedLists from '../ListWithNestedLists';

const ListWrapper = ({ lists, underline, darkMode }) => {
  return lists.map((list) =>
    list.nestedItems ? (
      <ListWithNestedLists
        {...list}
        underline={underline}
        darkMode={darkMode}
      />
    ) : (
      <ListItem
        {...list}
        underline={underline}
        darkMode={darkMode}
      />
    ),
  );
};

ListWrapper.defaultProps = {
  lists: [],
};

ListWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lists: PropTypes.array.isRequired,
  underline: PropTypes.bool,
  darkMode: PropTypes.bool,
};

export default ListWrapper;
