import React from 'react';
import styled from 'styled-components';
import Mast from '../../Headers/Mast';

const Offset = styled.div`
  background-color: white;
  margin: -15vh auto 2rem;
  max-width: 100%;
  padding: 2rem;
  position: relative;
  width: 1170px;
`;

// eslint-disable-next-line
const Inlay = ({ HeaderProps, children }) => (
  <>
    <Mast {...HeaderProps} offset={15} />
    <Offset>{children}</Offset>
  </>
);

export default Inlay;
