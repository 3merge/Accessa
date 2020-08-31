import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Ladder from '../../Carousels/Ladder';
import Focal from '../Focal';

const Main = styled.main`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  height: 100%;

  ${({ reverseOnMobile }) =>
    !reverseOnMobile
      ? css`
          ${media.lessThan('large')`
          flex-direction: column-reverse;
        `}
        `
      : undefined}
`;

const Box = styled.div`
  padding: 1rem;
  flex: 1;

  ${media.lessThan('large')`
    min-width: 100%;
    width: 100%;
  `}
`;

const ContentWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  padding: 2rem 1rem;

  ${media.lessThan('medium')`
    flex-direction: row;
  `}
`;

const Neapolitan = ({
  carousel,
  focalComponent,
  children,
  reverseOnMobile,
}) => (
  <Main reverseOnMobile={reverseOnMobile}>
    <ContentWrapper>
      <Box>{children}</Box>
      <Ladder data={carousel} />
    </ContentWrapper>
    <Focal>{focalComponent}</Focal>
  </Main>
);

Neapolitan.defaultProps = {
  carousel: [],
  focalComponent: null,
  reverseOnMobile: false,
};

Neapolitan.propTypes = {
  carousel: PropTypes.arrayOf(PropTypes.object),

  focalComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  reverseOnMobile: PropTypes.bool,
};

export default Neapolitan;
