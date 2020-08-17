import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Focal = ({
  children,
  className,
  focalBackground,
}) => {
  return (
    <S.Focal className={className} style={focalBackground}>
      {children}
    </S.Focal>
  );
};

Focal.defaultProps = {
  className: '',
  focalBackground: {},
};

Focal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  focalBackground: PropTypes.objectOf(PropTypes.string),
};

const S = {
  Focal: styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-height: 100%;
    width: 37.5%;

    ${media.lessThan('large')`
      width: 100%;
    `}
  `,
};

export default Focal;
