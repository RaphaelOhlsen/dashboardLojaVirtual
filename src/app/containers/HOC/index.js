/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import theme from '../../theme';
import Base from '../Base';
import GlobalStyle from '../../theme/GlobalStyle';

export const base = (Component) => {
  class _Base extends React.Component {
    componentDidMount() {
      const { getUser, authorized, history, usuario } = this.props;
      getUser();
      if (!authorized || !usuario || !usuario.role.includes('admin'))
        history.replace('/login');
    }

    componentDidUpdate() {
      const { authorized, history, usuario } = this.props;
      if (!authorized || !usuario || !usuario.role.includes('admin'))
        history.replace('/login');
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
          <Base history={this.props.history}>
            <GlobalStyle />
            <Component {...this.props} />
          </Base>
        </ThemeProvider>
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorized: state.auth.authorized,
    usuario: state.auth.usuario,
  });

  return connect(mapStateToProps, actions)(_Base);
};

export const noAuth = (Component) => {
  class _noAuth extends React.Component {
    componentDidMount() {
      const { getUser, authorized, history, usuario } = this.props;
      getUser();
      if (authorized && usuario.role.includes('admim')) history.replace('/');
    }

    componentDidUpdate(prevProps) {
      const { authorized, usuario } = this.props;
      if (!prevProps.authorized && authorized && usuario.role.includes('admin'))
        prevProps.history.replace('/');
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorized: state.auth.authorized,
    usuario: state.auth.usuario,
  });

  return connect(mapStateToProps, actions)(_noAuth);
};
