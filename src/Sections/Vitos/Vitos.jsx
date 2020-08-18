import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const columnStyles = css`
  padding: 1rem 2rem;
  width: 34%;

  ${media.lessThan('medium')`
   padding: 0;
    width: 100%; 
  `}
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 100%;
  padding: 1rem;
  width: 1170px;

  p,
  li,
  a,
  button {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row-reverse;

  ${media.lessThan('medium')`
    flex-direction: row; 
    flex-wrap: wrap;
  `}
`;

const Aside = styled.aside`
  ${columnStyles};
  width: 34%;
`;

const Section = styled.section`
  ${columnStyles};
  width: 66%;
`;

const Vitos = () => (
  <Container>
    <Grid>
      <Section>
        <h2>Needs a landmark title</h2>
        <p>
          All aspects of our operations conform to the ISO
          9001:2015 standard. We supply automotive rubber
          products which meet ASTM D2000 line call-outs, as
          well as the material specifications of major
          OEM’s, including General Motors, Ford, Chrysler,
          Nissan, Mazda, BMW, Honda, Toyota, Volvo and more.
          In those cases where a new specification is
          required, we work with our partners to develop an
          appropriate solution.
        </p>
        <p>
          All aspects of our operations conform to the ISO
          9001:2015 standard. We supply automotive rubber
          products which meet ASTM D2000 line call-outs, as
          well as the material specifications of major
          OEM’s, including General Motors, Ford, Chrysler,
          Nissan, Mazda, BMW, Honda, Toyota, Volvo and more.
          In those cases where a new specification is
          required, we work with our partners to develop an
          appropriate solution.
        </p>
      </Section>
      <Aside>
        <h3>This goes after </h3>
        <ul>
          <li>Option one</li>
          <li>Option two</li>
          <li>Option three</li>
        </ul>
      </Aside>
    </Grid>
  </Container>
);

export default Vitos;
