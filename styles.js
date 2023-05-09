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
    margin: 0 auto;
    font-family: system-ui;
    background-color: #d1e9ea;
    padding: 0;
  }
`;
