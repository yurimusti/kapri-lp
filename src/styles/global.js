import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  span {
    font-family: "Nova";
    font-size: 16px;
  }

  @font-face {
    font-family: "Nova";
    src: url("../src/assets/font/nova.otf") format("woff");
  }

  .ant-select-selector {
    background-color: transparent !important;
    border: 1px solid transparent !important;
  }

  .ant-select-selection-item {
    color: #fff;
    font-weight: bold;
  }

  .ant-select-arrow {
    color: #fff !important;
  }
`;
