import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .gatsby-image-wrapper {
    bottom: 0;
    left: 0;
    position: absolute !important;
    right: 0;
    top: 0;

    img {
      object-fit: ${({ contain }) =>
        `${contain ? 'contain' : 'cover'} !important`};
    }
  }
`;

const Background = ({ contain, ...rest }) => (
  <Wrapper contain={contain}>
    <Image {...rest} />
  </Wrapper>
);

Background.defaultProps = {
  contain: false,
};

Background.propTypes = {
  contain: PropTypes.bool,
};

export default Background;
