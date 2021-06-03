import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-width: 320px;
    font-family: "Rubik", sans-serif;
    color: #393c41;
  }
`;
