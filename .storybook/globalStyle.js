import { createGlobalStyle, css } from 'styled-components';

const bodyStyles = css`
  margin: 0;
  font-family: Helvatica, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  box-sizing: border-box;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const GlobalStyles = createGlobalStyle`
  body,html {
    ${bodyStyles}
  }
`;
