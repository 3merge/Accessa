import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Typography = styled.p`
  font-size: calc(
    20.25px + (20.25 - 18) *
      ((100vw - 300px) / (1600 - 300))
  );
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 42rem;
`;

const Tagline = ({ children }) => (
  <Typography>{children}</Typography>
);

Tagline.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Tagline;
