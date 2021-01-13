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
  p,h1,h2,a,button{
    font-family: 'Bodoni Moda', serif;
  }
  a,button{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:400;
  }
  h1{
    font-weight:200;
  }
  p{
    font-weight:100;
  }
`;

export default GlobalStyle;