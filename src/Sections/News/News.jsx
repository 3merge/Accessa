import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../../Utils/Container';

const Section = styled.section`
  columns: 2 325px;
  margin: 2rem 0;

  > :first-child,
  > :last-child {
    margin-top: 0;
  }
`;

const News = ({ children }) => (
  <Container size="small">
    <Section>{children}</Section>
  </Container>
);

News.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
};

export default News;
