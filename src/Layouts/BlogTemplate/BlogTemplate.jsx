import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Mast } from '../../Headers';
import { Field } from '../../Features';

const BlogTemplate = ({
  HeaderProps,
  FeatureProps,
  FeatureWrapper,
  children,
}) => (
  <>
    <Mast {...HeaderProps} />
    <Box py={4}>
      <Container maxWidth="md">
        <Box mb={5}>{children}</Box>
        <FeatureWrapper>
          <Field {...FeatureProps} />
        </FeatureWrapper>
      </Container>
    </Box>
  </>
);

BlogTemplate.defaultProps = {
  FeatureProps: {},
  FeatureWrapper: (props) =>
    React.createElement('div', props),
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
  FeatureWrapper: PropTypes.func,
};

export default BlogTemplate;
