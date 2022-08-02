import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.font.family};

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.content.regular};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`}
`;

export default GlobalStyles;
