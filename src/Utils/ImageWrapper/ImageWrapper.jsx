import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const getMobileAttributes = (size) =>
  media.lessThan(size)`
      ${(props) => {
        const out = {};
        const addTo = (attr) => {
          if (props[size] && props[size][attr])
            out[attr] = props[size][attr];
        };

        addTo('height');
        addTo('width');
        return out;
      }}
  `;

const Box = styled.div`
  ${({
    height = '100%',
    position = 'relative',
    width = '100%',
  }) => ({
    height,
    position,
    width,
  })}

  ${getMobileAttributes('large')}
  ${getMobileAttributes(
    'medium',
  )}
  ${getMobileAttributes('small')}

  img {
    mix-blend-mode: multiply;
    object-position: center;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
    width: 100%;

    ${({ fit }) => css`
      object-fit: ${fit};
    `}
  }
`;

const ImageWrapper = ({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
);

ImageWrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ImageWrapper;
