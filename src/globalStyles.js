import { createGlobalStyle } from 'styled-components';
import COLORS from './baseui/colors'
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    border: none;
    color: ${COLORS.BLACK};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${COLORS.GRAYF4};
    font-size: 14px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  /* Links */

  a, a:link, a:visited  {
      color: inherit;
      text-decoration: none;
  }

  a:hover  {
      color: inherit;
      text-decoration: none;
  }

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
    display: block;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input, textarea, button, select {
    font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
      display: inline-block;
      box-shadow: none;
      background-color: transparent;
      background: none;
      cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
      outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }

  svg {
    display: block;
  }
`;
 
export default GlobalStyle;