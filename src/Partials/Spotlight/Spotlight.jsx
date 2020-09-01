import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import Image from 'gatsby-image';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
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

const LogoContainer = styled(Image)`
  height: 85px;
  width: 180px;

  ${media.lessThan('large')`
    width: 140px;
  `}

  ${media.lessThan('medium')`
    width: 90px;
  `}
`;

const Headline = styled.h2`
  font-size: 2.083rem;
  line-height: 1.2;
  width: 87.5%;
`;

const Text = styled.p`
  font-size: 0.885rem;
  line-height: 1.7;

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
  children,
  color,
  title,
  description,
  logo,
}) => (
  <Wrapper>
    <div>
      <LogoContainer
        fluid={{ src: logo }}
        alt="Logo"
        imgStyle={{
          objectPosition: 'left',
          objectFit: 'contain',
        }}
      />
      <Headline style={{ color }}>{title}</Headline>
      <TextMobile style={{ color }}>
        {description}
      </TextMobile>
    </div>
    <div>
      {children}
      <Text style={{ color }}>{description}</Text>
    </div>
  </Wrapper>
);

Spotlight.defaultProps = {
  color: undefined,
};

Spotlight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  color: PropTypes.string,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Spotlight;
