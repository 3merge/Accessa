import React from 'react';
import Lottie from 'react-lottie';

const Spotlight = ({
  animationData,
  title,
  description,
}) => (
  <div
    style={{
      textAlign: 'center',
      padding: '3rem',
      margin: '0 auto',
      maxWidth: 550,
    }}
  >
    <Lottie
      height="350px"
      width="100%"
      options={{
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />

    <h2>{title}</h2>
    <p style={{ lineHeight: 1.73 }}>{description}</p>
  </div>
);

export default Spotlight;
