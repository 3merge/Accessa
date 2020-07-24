import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Ladder from '../../Carousels/Ladder';
import Viewport from '../../Utils/Viewport';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`;

const Focal = styled.div`
  align-items: center;
  background: whitesmoke;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 60%;

  ${media.lessThan('large')`
    flex-wrap: wrap;
    width: 50%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

const ContentWrapper = styled.section`
  box-sizing: border-box;
  padding: 3rem;
  width: 40%;

  ${media.lessThan('large')`
    width: 50%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

const BarRail = ({
  carousel,
  children,
  focalComponent,
}) => (
  <Viewport responsive>
    <Main>
      <ContentWrapper>{children}</ContentWrapper>
      <Focal>
        <div style={{ flex: 1 }}>{focalComponent}</div>
        <Ladder data={carousel} />
      </Focal>
    </Main>
  </Viewport>
);

BarRail.defaultProps = {
  carousel: [],
};

export default BarRail;
