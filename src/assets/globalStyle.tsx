import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }
  button,a{
    cursor:pointer;
  }
  p,h1,h2{
    font-family: 'Bodoni Moda', serif;
  }
  h1{
    font-weight:200;
  }
  p{
    font-weight:100;
  }
`;

export default GlobalStyle;