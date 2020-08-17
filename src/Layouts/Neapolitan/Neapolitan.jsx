import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Ladder from '../../Carousels/Ladder';
import Focal from '../Focal';

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
  focalBackground,
}) => (
  <Main reverseOnMobile={reverseOnMobile}>
    <Focal focalBackground={focalBackground}>
      {focalComponent}
    </Focal>
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
