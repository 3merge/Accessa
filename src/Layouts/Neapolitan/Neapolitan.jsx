import React from 'react';
import styled from 'styled-components';
import Ladder from '../../Carousels/Ladder';
import Viewport from '../../Utils/Viewport';

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
`;

const Focal = styled.div`
  background: whitesmoke;
  height: 100%;
  width: 40%;
`;

const ContentWrapper = styled.section`
  flex: 1;
  padding: 3rem;
`;

const Neapolitan = ({ carousel, children }) => (
  <Viewport>
    <Main>
      <Focal />
      <ContentWrapper>{children}</ContentWrapper>
      <Ladder data={carousel} />
    </Main>
  </Viewport>
);

Neapolitan.defaultProps = {
  carousel: [],
};

export default Neapolitan;
