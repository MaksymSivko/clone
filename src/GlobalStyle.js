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
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color: #000;
  }

  @keyframes animDown {
    0%,20%,50%,80%,100%{
      transform: translateY(0);
    }
    40%{
       transform: translateY(5px);
    }
    60%{
       transform: translateY(3px);
    }
  }
`;
