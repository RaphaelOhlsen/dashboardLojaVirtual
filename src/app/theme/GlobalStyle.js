import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
  text-decoration: none;
}
`;

export default GlobalStyle;
