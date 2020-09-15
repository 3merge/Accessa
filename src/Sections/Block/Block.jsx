import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line
const Block = ({ children }) => (
  <Container maxWidth="lg" component="section">
    <Box py={4}>
      <Container
        maxWidth="md"
        style={{ marginRight: '100%' }}
      >
        {children}
      </Container>
    </Box>
  </Container>
);

export default Block;
