import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Container } from '../../Utils';

const Section = styled.section`
  padding: 0 2rem;
  width: 66%;

  ${media.lessThan('large')`
    width: 80%;
  `}

  ${media.lessThan('medium')`
    padding: 0;
    width: 100%;
  `}
`;

const Vitos = () => (
  <Container>
    <Section>
      <h2>Needs a landmark title</h2>
      <p>
        All aspects of our operations conform to the ISO
        9001:2015 standard. We supply automotive rubber
        products which meet ASTM D2000 line call-outs, as
        well as the material specifications of major OEM’s,
        including General Motors, Ford, Chrysler, Nissan,
        Mazda, BMW, Honda, Toyota, Volvo and more. In those
        cases where a new specification is required, we work
        with our partners to develop an appropriate
        solution.
      </p>
      <p>
        All aspects of our operations conform to the ISO
        9001:2015 standard. We supply automotive rubber
        products which meet ASTM D2000 line call-outs, as
        well as the material specifications of major OEM’s,
        including General Motors, Ford, Chrysler, Nissan,
        Mazda, BMW, Honda, Toyota, Volvo and more. In those
        cases where a new specification is required, we work
        with our partners to develop an appropriate
        solution.
      </p>
    </Section>
  </Container>
);

export default Vitos;
