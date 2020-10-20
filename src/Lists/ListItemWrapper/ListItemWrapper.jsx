import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import ListWithNestedLists from '../ListWithNestedLists';

const ListWrapper = ({ lists, underline }) => {
  return lists.map((list, i) =>
    React.createElement(
      list.nestedItems ? ListWithNestedLists : ListItem,
      {
        key: list.listItemText + i,
        underline,
        ...list,
      },
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
};

export default ListWrapper;
