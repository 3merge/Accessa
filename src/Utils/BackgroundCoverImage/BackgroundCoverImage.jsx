import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Vibrant from 'node-vibrant';
import { useImage } from 'react-image';
import styled, { css } from 'styled-components';

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
  opacity: 0.72;
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

const Img = ({ alt, srcList, ...rest }) => {
  const { src } = useImage({
    ...rest,
    srcList,
  });

  const [
    backgroundColor,
    setBackgroundColor,
  ] = React.useState('#222');

  Vibrant.from(src).getPalette((err, palette) => {
    const bg = get(palette, 'DarkVibrant.hex');
    if (!err && bg) setBackgroundColor(bg);
  });

  return (
    <Container>
      {src && <img src={src} alt={alt} />}
      <Dimmer backgroundColor={backgroundColor} />
    </Container>
  );
};

const BackgroundCoverImage = (props) => (
  <Suspense fallback={<span />}>
    <Img {...props} />
  </Suspense>
);

Img.propTypes = {
  srcList: PropTypes.string,
  alt: PropTypes.string,
};

Img.defaultProps = {
  srcList:
    'https://source.unsplash.com/collection/388793/1600x900',
  alt: 'Random photo selected from unsplash API',
};

export default BackgroundCoverImage;
