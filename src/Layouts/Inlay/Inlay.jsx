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

const Inlay = ({ HeaderProps }) => (
  <>
    <Mast {...HeaderProps} offset={15} />
    <Offset>
      <p>HEY</p>
    </Offset>
  </>
);

export default Inlay;
