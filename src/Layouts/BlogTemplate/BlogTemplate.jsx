import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Mast } from '../../Headers';
import { Field } from '../../Features';
import useStyles from './useStyles';

const BlogTemplate = ({ mast, field, children }) => {
  const {
    relatedArticlesWrapper,
    verticalPadding,
  } = useStyles();
  return (
    <>
      <Mast {...mast} />
      <Container className={verticalPadding}>
        {children}
      </Container>
      <div
        className={`${verticalPadding} ${relatedArticlesWrapper}`}
      >
        <Container>
          <Field {...field} />
        </Container>
      </div>
    </>
  );
};

BlogTemplate.defaultProps = {
  field: [],
};

BlogTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mast: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  field: PropTypes.shape({
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
