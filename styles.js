import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html{
    background-color: white;
  }

  body {
    display: grid;
    min-height: 100vh;
    max-width: 375px;
    max-height: 300;
    margin: 0 auto;
    font-family: system-ui;
    background-color: #fee2e2;
    padding: 0;
  }
`;
