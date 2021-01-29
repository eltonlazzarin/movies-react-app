import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), #1A99E8, #778899);
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }


  :root {
    --gray: #778899;
    --light-gray: #9E9E9E;
    --favorite:  #DC143C;
    --white: #fff;
  }
`;
