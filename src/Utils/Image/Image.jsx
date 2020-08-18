import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useImage } from 'react-image';

const Image = ({ alt, srcList, ...rest }) => {
  const { src } = useImage({
    ...rest,
    srcList,
  });

  return src && <img src={src} alt={alt} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  srcList: PropTypes.string.isRequired,
};

export default (props) => (
  <Suspense fallback={<div />}>
    <Image {...props} />
  </Suspense>
);
