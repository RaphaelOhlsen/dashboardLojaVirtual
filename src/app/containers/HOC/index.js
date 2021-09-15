import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Base from '../Base';
import GlobalStyle from '../../theme/GlobalStyle';

export const base = (Component) => (props) =>
  (
    <ThemeProvider theme={theme}>
      <Base history={props.history}>
        <GlobalStyle />
        <Component {...props} />
      </Base>
    </ThemeProvider>
  );

export const page = (Component) => (props) =>
  (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...props} />
    </ThemeProvider>
  );
