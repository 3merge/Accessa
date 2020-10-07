import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Mast } from '../../Headers';
import { Field } from '../../Features';

const BlogTemplate = ({
  HeaderProps,
  FeatureProps,
  children,
}) => (
  <>
    <Mast {...HeaderProps} />
    <Box py={4}>
      <Container maxWidth="md">{children}</Container>
    </Box>
    <Field
      {...FeatureProps}
      component={({ children: nestedChildren }) => (
        <Box bgcolor="grey.200" py={4}>
          <Container>{nestedChildren}</Container>
        </Box>
      )}
    />
  </>
);

BlogTemplate.defaultProps = {
  FeatureProps: {},
};

BlogTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  HeaderProps: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  FeatureProps: PropTypes.shape({
    title: PropTypes.string,
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        src: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ).isRequired,
  }),
};

export default BlogTemplate;
