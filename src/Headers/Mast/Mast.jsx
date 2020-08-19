import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import {
  BackgroundCoverImage,
  Headline,
  Tagline,
} from '../../Utils';

const Wrapper = styled.header`
  background-color: #222;
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  margin: 0 auto;
  position: relative;
  text-align: center;
  max-width: 100%;

  ${({ offset, size }) => {
    const withOffset = (v) => v + offset;
    const getBase = () => {
      switch (size) {
        case 'small':
          return 7;
        case 'large':
          return 32;
        case 'medium':
        default:
          return 15;
      }
    };

    const base = getBase();
    const md = base / 1.25;
    const sm = base / 2;

    return css`
      padding: ${base}vh 3rem ${withOffset(base)}vh;

      ${media.lessThan('medium')`
        padding: ${md}vh 2rem ${withOffset(md)}vh;
      `}

      ${media.lessThan('small')`
        padding: ${sm}vh 1rem ${withOffset(sm)}vh;
      `}
    `;
  }}
`;

const Mast = ({
  title,
  subtitle,
  offset,
  renderBottom,
  renderTop,
  size,
  ...rest
}) => (
  <Wrapper>
    <BackgroundCoverImage {...rest} />
    <Container size={size} offset={offset}>
      {renderTop}
      <Headline>{title}</Headline>
      {subtitle && <Tagline>{subtitle}</Tagline>}
      {renderBottom}
    </Container>
  </Wrapper>
);

Mast.defaultProps = {
  offset: 0,
  size: 'medium',
  subtitle: '',
  renderBottom: null,
  renderTop: null,
};

Mast.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  offset: PropTypes.number,
  renderBottom: PropTypes.node,
  renderTop: PropTypes.node,
};

export default Mast;
