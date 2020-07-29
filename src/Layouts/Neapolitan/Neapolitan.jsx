import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Ladder from '../../Carousels/Ladder';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;

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

  ${media.lessThan('large')`
    width: 100%;
  `}
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
}) => (
  <Main reverseOnMobile={reverseOnMobile}>
    <Focal>{focalComponent}</Focal>
    <ContentWrapper>
      {children}
      <Ladder data={carousel} />
    </ContentWrapper>
  </Main>
);

Neapolitan.defaultProps = {
  carousel: [],
};

export default Neapolitan;
