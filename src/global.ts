import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    background: ${(props) => props.theme.background};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["brand-primary-dark"]};
  }

  body {
    
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    transition: background 0.3s;

  }

  body, input, textarea, p, span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
  }

  strong, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 160%;
  }

  h2, h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 130%;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
  }
`;