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

const HeaderBase = styled.header`
  background-color: #222;
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const HeaderContent = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 100%;
  max-width: calc(100vw - (20% * 2));
  margin-left: 20%;
  position: relative;

  div {
    width: 100%;
  }

  ${media.lessThan('large')`
    max-width: 50%;
    margin-left: 25%; 
  `}

  ${media.lessThan('medium')`
    padding: 1rem;
    margin: 0 2rem;
    max-width: 100%;
    text-align: center;
    width: 100%;
  `}
`;

const getCount = () => {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1170) return 3;
  return 4;
};

const Header = ({
  ImageProps,
  title,
  subtitle,
  ...rest
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const changeCount = () => {
      setCount(getCount());
    };

    changeCount();
    window.addEventListener('resize', changeCount);
  }, []);

  return (
    <HeaderBase>
      <BackgroundCoverImage {...rest} />
      <VerticalLines backgroundColor="#FFF" count={count} />
      <HeaderContent>
        <div>
          <Headline>{title}</Headline>
          <Tagline>{subtitle}</Tagline>
        </div>
      </HeaderContent>
    </HeaderBase>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ImageProps: PropTypes.shape({
    srcList: PropTypes.string,
    alt: PropTypes.string,
  }),
};

Header.defaultProps = {
  title: 'a small island, especially in a river',
  subtitle:
    'before 900; Middle English eyt, Old English ȳgett, diminutive of ieg, īg island, cognate with Middle Low German ō, ōge, ou(we), Old High German ouwa, Old Norse ey.',
  ImageProps: {
    srcList:
      'https://source.unsplash.com/collection/388793/1600x900',
    alt: 'Random photo selected from unsplash API',
  },
};

export default Header;
