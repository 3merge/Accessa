import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-width: 45vw;
  padding: 3rem;
  width: 100%;

  ${media.lessThan('large')`
    flex-direction: row;
    height: auto !Important;
    max-width: 100%;
  `}

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`;

const Logo = styled.img`
  max-width: 180px;

  ${media.lessThan('large')`
    max-width: 140px;
  `}

  ${media.lessThan('medium')`
    max-width: 90px;
  `}
`;

const LottieContainer = styled.div`
  max-width: 514px;

  ${media.lessThan('medium')`
    max-width: 325px;
  `}
`;

const Headline = styled.h2`
  font-size: 1.842rem;
  width: 87.5%;
`;

const Text = styled.p`
  font-size: 0.885rem;
  line-height: 1.7;
  padding-bottom: 8vh;

  ${media.lessThan('large')`
    display: none;
  `}
`;

const TextMobile = styled.p`
  display: none;

  ${media.lessThan('large')`
    display: block;
  `}
`;

const Spotlight = ({
  animationData,
  backgroundColor,
  color,
  title,
  description,
  logo,
}) => (
  <Wrapper style={{ backgroundColor }}>
    <div>
      <Logo src={logo} alt="Logo" />
      <Headline style={{ color }}>{title}</Headline>
      <TextMobile style={{ color }}>
        {description}
      </TextMobile>
    </div>
    <div>
      <LottieContainer>
        <Lottie
          height="auto"
          width="100%"
          options={{
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
        />
      </LottieContainer>
      <Text style={{ color }}>{description}</Text>
    </div>
  </Wrapper>
);

Spotlight.defaultProps = {
  backgroundColor: '#fafbfc',
};

Spotlight.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Spotlight;
