import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@200;500;800&display=swap');

  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: scroll;
    scroll-behavior: smooth;
    font-family: 'Roboto Flex', sans-serif;
    background: #dfe3ee;
    color: #363753;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: 1.15; 
    margin: 0; 
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none
  }

  input { 
    padding: 8px;
    background-color: #fff;
    min-width: 250px;
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
`
