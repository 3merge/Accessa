/* eslint-disable react/prop-types */
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default (Component) => ({
  data,
  visibleSlides = {},
  ...rest
}) => {
  if (!Array.isArray(data) || !data.length) return null;

  const { mobile = 2, desktop = 3 } = visibleSlides;
  const isBreakpoint = useMediaQuery('(max-width:600px)');

  const len = data.length;
  const numOfSlides = Math.min(
    isBreakpoint ? mobile : desktop,
    len,
  );

  return (
    <Component
      data={data}
      visibleSlides={numOfSlides}
      dragEnabled={len > numOfSlides}
      totalSlides={len}
      {...rest}
    />
  );
};
