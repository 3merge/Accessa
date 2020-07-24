import React, { Suspense } from 'react';
import { useImage } from 'react-image';

const Image = ({ alt, srcList, ...rest }) => {
  const { src } = useImage({
    ...rest,
    srcList,
  });

  return src && <img src={src} alt={alt} />;
};

export default (props) => (
  <Suspense fallback={<div />}>
    <Image {...props} />
  </Suspense>
);
