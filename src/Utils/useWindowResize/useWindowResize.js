import React from 'react';

export default (op, breakpoint, breakpointRange) => {
  const breakpoints = {
    huge: 1440,
    large: 1170,
    medium: 768,
    small: 450,
  };

  const [conditionMet, setConditionMet] = React.useState();

  const getWindowDimensions = () => {
    const { innerWidth } = window;
    const val = breakpoints[breakpoint];
    const val2 = breakpoints[breakpointRange];

    const genOutput = () => {
      switch (op) {
        case 'lessThan':
          return val >= innerWidth;
        case 'greaterThan':
          return val <= innerWidth;
        case 'between':
          return val > innerWidth && val2 < innerWidth;
        default:
          return false;
      }
    };

    // evaluate for state
    setConditionMet(genOutput());
  };

  React.useLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined;

    getWindowDimensions();
    window.addEventListener('resize', getWindowDimensions);

    return () => {
      window.removeEventListener(
        'resize',
        getWindowDimensions,
      );
    };
  });

  return conditionMet;
};
