/* eslint-disable react/prop-types */
import React from 'react';

const renderListSafely = (Component) => ({
  lists,
  ...props
}) =>
  !Array.isArray(lists) || lists.length === 0 ? null : (
    <Component lists={lists} {...props} />
  );

export default renderListSafely;
