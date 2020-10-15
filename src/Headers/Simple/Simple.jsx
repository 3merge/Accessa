import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import { Headline, Tagline } from '../../Utils';

const Simple = ({
  title,
  subtitle,
  renderBottom,
  renderTop,
}) => (
  <Box height="100%" textAlign="center">
    <Container maxWidth="lg">
      {renderTop}
      <Headline>{title}</Headline>
      {subtitle && <Tagline>{subtitle}</Tagline>}
      {renderBottom}
    </Container>
  </Box>
);

Simple.defaultProps = {
  subtitle: '',
  renderBottom: null,
  renderTop: null,
};

Simple.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  renderBottom: PropTypes.node,
  renderTop: PropTypes.node,
};

export default Simple;
