import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    min-height: 100vh;
    max-width: 368px;
    margin: 0 auto;
    font-family: system-ui;
    background-color: #d1e9ea;
  }
`;
