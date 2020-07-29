import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.div`
  overflow: hidden;
  flex-wrap: nowrap;

  ${({ mh, responsive }) => css`
    height: ${mh}px;
    max-height: ${mh}px;

    ${responsive
      ? media.lessThan(responsive)`
      height: auto;
      max-height: none;
    `
      : ''}
  `}
`;

const AppViewport = ({ children, ...rest }) => {
  const [maxHeight, setMaxHeight] = React.useState('100vh');

  const isReady = typeof window !== 'undefined';

  const setViewportUnit = React.useCallback(() => {
    if (!isReady) return undefined;
    const vh = window.innerHeight;
    document
      .querySelector(':root')
      .style.setProperty('--vh', `${vh / 100}px`);

    return vh;
  }, [isReady]);

  React.useLayoutEffect(() => {
    if (!isReady) return undefined;
    window.addEventListener('resize', setViewportUnit);
    setMaxHeight(setViewportUnit());

    return () => {
      window.removeEventListener('resize', setViewportUnit);
    };
  }, [isReady]);

  return (
    <Wrapper mh={maxHeight} {...rest}>
      {children}
    </Wrapper>
  );
};

AppViewport.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  responsive: PropTypes.bool,
};

AppViewport.defaultProps = {
  responsive: false,
};

export default AppViewport;
