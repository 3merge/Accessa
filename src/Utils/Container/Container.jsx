import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  margin: 1rem auto;
  max-width: 100%;
  padding: 1rem;

  ${({ size }) => {
    let width = 1170;
    if (size === 'small') width = 768;
    if (size === 'large') width = 1440;
    return { width };
  }}

  p,
  li,
  a,
  button {
    font-size: 1rem;
  }
`;
