import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Span = styled.span`
  height: 100%;
  position: absolute;
  opacity: 0.11;
  top: 0;
  width: 1px;

  ${({ backgroundColor, left }) => css`
    background-color: ${backgroundColor};
    left: ${left};
  `}
`;

export const VerticalLines = ({
  backgroundColor,
  count,
}) => {
  const numberOfLines = Number(count) + 1;

  const generateLeftProp = React.useCallback(
    (value) =>
      `${Number((100 / numberOfLines) * value).toFixed(
        2,
      )}%`,
    [numberOfLines],
  );

  return !Number.isNaN(numberOfLines)
    ? [...Array(numberOfLines).keys()].map((i) => (
        <Span
          key={i}
          backgroundColor={backgroundColor}
          left={generateLeftProp(i)}
        />
      ))
    : null;
};

VerticalLines.propTypes = {
  /**
   * CSS background color for the lines. Each will be rendered slightly transparent via opacity.
   */

  backgroundColor: PropTypes.string,
  /**
   * Determines the number of vertical lines to generate.
   */
  count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

VerticalLines.defaultProps = {
  backgroundColor: '#222',
  count: 4,
};

export default VerticalLines;
