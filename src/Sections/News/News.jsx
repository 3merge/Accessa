import React from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Container from '../../Utils/Container';

const Section = styled.section`
  columns: 2 325px;
  margin: 2rem 0;

  > :first-child,
  > :last-child {
    margin-top: 0;
  }
`;

const News = () => (
  <Container size="small">
    <Section>
      <p>
        All aspects of our operations conform to the ISO
        9001:2015 standard. We supply automotive rubber
        products which meet ASTM D2000 line call-outs, as
        well as the material specifications of major OEM’s,
        including General Motors, Ford, Chrysler, Nissan,
        Mazda, BMW, Honda, Toyota, Volvo and more. In those
        cases where a new specification is required, we work
        with our partners to develop an appropriate
        solution. All aspects of our operations conform to
      </p>
      <p>
        the ISO 9001:2015 standard. We supply automotive
        rubber products which meet ASTM D2000 line
        call-outs, as All aspects of our operations conform
        to the ISO 9001:2015 standard. We supply automotive
        rubber products which meet ASTM D2000 line
        call-outs, as well as the material specifications of
        major OEM’s, including General Motors, Ford,
        Chrysler, Nissan, Mazda, BMW, Honda, Toyota, Volvo
        and more. In those cases where a new specification
        is required, we work with our partners to develop an
        appropriate solution.
      </p>
    </Section>
  </Container>
);

export default News;
