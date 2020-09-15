import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
  BackgroundCoverImage,
  Headline,
  Tagline,
  VerticalLines,
} from '../../Utils';

const HeaderBase = styled.header`
  background-color: #222;
  box-sizing: border-box;
  color: #fff;
  display: block;
  height: 100%;
  padding: 15vh;
  position: relative;
  width: 100%;
`;

const getCount = () => {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1170) return 3;
  return 5;
};

const Header = ({ title, subtitle, ...rest }) => {
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
      <Container maxWidth="md">
        <Box position="relative" textAlign="center">
          <Headline>{title}</Headline>
          <Tagline>{subtitle}</Tagline>
        </Box>
      </Container>
    </HeaderBase>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: '',
};

export default Header;
