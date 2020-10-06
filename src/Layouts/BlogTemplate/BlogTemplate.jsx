import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Mast } from '../../Headers';

const BlogTemplate = ({ mast, children }) => {
  return (
    <>
      <Mast {...mast} />
      <Container>{children}</Container>
    </>
  );
};

BlogTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mast: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default BlogTemplate;
