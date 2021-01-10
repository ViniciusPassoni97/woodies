import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }
  p,h1,h2{
    font-family: 'Bodoni Moda', serif;
  }
`;

export default GlobalStyle;