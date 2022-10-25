import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: auto;
  }
  body {
    background-color: #0c0b13;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
  }
`;
