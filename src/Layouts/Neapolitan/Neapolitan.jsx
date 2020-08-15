import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Ladder from '../../Carousels/Ladder';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: ${({ fullHeight }) =>
    fullHeight ? '100vh' : 'auto'};

  ${({ reverseOnMobile }) =>
    reverseOnMobile
      ? css`
          ${media.lessThan('medium')`
          flex-direction: column-reverse;
        `}
        `
      : css``}
`;

const Focal = styled.div`
  align-items: center;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  overflow: hidden;
  min-height: 100%;
  width: 37.5%;
  order: ${({ switchEl }) => (switchEl ? 1 : 0)};
  ${media.lessThan('large')`
    width: 100%;
  `};
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex: 1;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

const Neapolitan = ({
  carousel,
  focalComponent,
  children,
  reverseOnMobile,
  switchEl,
  fullHeight,
}) => (
  <Main
    reverseOnMobile={reverseOnMobile}
    fullHeight={fullHeight}
  >
    <Focal switchEl={switchEl}>{focalComponent}</Focal>
    <ContentWrapper>
      {children}
      <Ladder data={carousel} />
    </ContentWrapper>
  </Main>
);

Neapolitan.defaultProps = {
  carousel: [],
  switchEl: false,
  fullHeight: false,
};

Neapolitan.propTypes = {
  carousel: PropTypes.arrayOf(PropTypes.object),
  switchEl: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

export default Neapolitan;
