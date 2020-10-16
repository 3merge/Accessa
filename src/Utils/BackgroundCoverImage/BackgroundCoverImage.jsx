import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Vibrant from 'node-vibrant';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

const Container = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  img {
    filter: brightness(60%);
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const Dimmer = styled.div`
  bottom: 0;
  left: 0;
  opacity: 0.82;
  position: absolute;
  right: 0;
  transition: background-color 500ms ease-in;
  top: 0;

  ${(props) =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}
`;

const BackgroundCoverImage = (props) => {
  const [
    backgroundColor,
    setBackgroundColor,
  ] = React.useState('#222');

  Vibrant.from(
    // contentful does blocks the network attempt
    // so base64 allows this component to do it in browser instead
    get(props, 'fluid.base64', get(props, 'fluid.src')),
  ).getPalette((err, palette) => {
    const bg = get(palette, 'DarkVibrant.hex');
    if (!err && bg) setBackgroundColor(bg);
  });

  return (
    <Container>
      <Image
        {...props}
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <Dimmer backgroundColor={backgroundColor} />
    </Container>
  );
};

BackgroundCoverImage.propTypes = {
  fluid: PropTypes.shape({
    src: PropTypes.string,
  }),
  alt: PropTypes.string,
};

BackgroundCoverImage.defaultProps = {
  fluid: {
    src:
      'https://source.unsplash.com/collection/388793/1600x900',
  },
  alt: 'Random photo selected from unsplash API',
};

export default BackgroundCoverImage;
