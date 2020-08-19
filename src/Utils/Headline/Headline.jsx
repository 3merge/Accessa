import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Typography = styled.h1`
  font-size: calc(
    42.535px + (42.535 - 25.629) *
      ((100vw - 300px) / (1600 - 300))
  );
  line-height: 0.9;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 58rem;

  ${media.lessThan('medium')`
    width: 100%; 
  `}
`;

const Headline = ({ children }) => (
  <Typography>{children}</Typography>
);

Headline.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Headline;
