import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';

const Overview = ({
  align,
  children,
  title,
  description,
  ...rest
}) => (
  <Box component="section" textAlign={align}>
    <Container {...rest}>
      {title && (
        <Typography variant="h2">{title}</Typography>
      )}
      {description && (
        <Box my={2}>
          <Typography component="p" variant="subtitle1">
            {description}
          </Typography>
        </Box>
      )}
    </Container>
    {children}
  </Box>
);

Overview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.node,
  ]),
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

Overview.defaultProps = {
  title: '',
  description: '',
  align: 'left',
  children: null,
};

export default Overview;
