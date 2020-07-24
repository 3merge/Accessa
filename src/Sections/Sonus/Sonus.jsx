import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Article = styled.article`
  box-sizing: border-box;
  padding: 10vw;
  text-align: center;

  ${({ gridSize }) => {
    return css`
      width: ${100 / gridSize}%;
    `;
  }}
`;

const Sonus = ({ data, maximumColumnCount }) => {
  if (!Array.isArray(data) || !data.length) return null;

  return (
    <Section>
      {data.map((item) => (
        <Article
          key={item.title}
          gridSize={Math.min(
            data.length,
            maximumColumnCount,
          )}
          style={{
            backgroundColor: item.backgroundColor,
          }}
        >
          <h2>{item.title}</h2>
        </Article>
      ))}
    </Section>
  );
};

Sonus.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
    }),
  ),
  maximumColumnCount: PropTypes.number,
};

Sonus.defaultProps = {
  data: [],
  maximumColumnCount: 4,
};

export default Sonus;
