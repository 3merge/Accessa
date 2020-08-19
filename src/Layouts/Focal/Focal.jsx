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
    background-color: #fafbfc;
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-height: 100%;
    min-width: 514px;
    width: 37.5%;
    height: 100%;

    ${media.lessThan('large')`
      min-height: auto;
      min-width: auto;
      width: 100%;
    `}
  `,
};

export default Focal;
