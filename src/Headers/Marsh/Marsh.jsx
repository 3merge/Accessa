import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
  BackgroundCoverImage,
  Headline,
  Tagline,
  VerticalLines,
} from '../../Utils';

const Wrapper = styled.header`
  background-color: #222;
  display: block;
  padding: 25vh 0;
  position: relative;
  width: 100%;

  ${media.lessThan('medium')`
    padding: 15vh 0;
  `}

  ${media.lessThan('small')`
    padding: 11vh 0;
  `}
`;

const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  margin: 0 auto;
  padding: 0 3vw;
  position: relative;
  text-align: center;
  width: 625px;
  max-width: 100%;
`;

const Mask = styled.div`
  background-color: #fff;
  height: 100%;
  left: 50%;
  opacity: 0.089;
  position: absolute;
  top: 0;
  width: 50%;
`;

const Header = ({ title, subtitle, ...rest }) => (
  <Wrapper>
    <BackgroundCoverImage {...rest} />
    <Mask />
    <VerticalLines backgroundColor="#FFF" count="1" />
    <Container>
      <Headline>{title}</Headline>
      <Tagline>{subtitle}</Tagline>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: 'a small island, especially in a river',
  subtitle:
    'before 900; Middle English eyt, Old English ȳgett, diminutive of ieg, īg island, cognate with Middle Low German ō, ōge, ou(we), Old High German ouwa, Old Norse ey.',
};

export default Header;
