import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Standard';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { Box } from '../../components/foundation/layout/Box';
import { Card } from '../../components/Card';

import * as actions from '../../actions';

import { api, versao } from '../../config';

function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    rememberOption: true,
    errors: {},
  });

  useEffect(() => {
    setState({ ...state, rememberOption: actions.getRememberOption() });
  }, []);

  const { email, password, rememberOption, errors } = state;

  const onChangeInput = (field, ev) => {
    setState({ ...state, [field]: ev.target.value });
  };

  const onChangeCheckBox = () =>
    setState({ ...state, rememberOption: !rememberOption });

  const handleLogin = () => {
    props.handleLogin({ email, password, rememberOption }, () => {
      alert('aviso');
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Card width="95%" maxWidth="450px">
        <Box
          display="flex"
          alignItems="center"
          jusifyContente="center"
          flexDirection="column"
        >
          <Titulo
            tipo="h1"
            variant="standard.main"
            fontSize="3rem"
            margin="10px 0 20px"
          >
            Loja TI
          </Titulo>
          <Box marginBottom="60px">Faça seu login abaixo</Box>
        </Box>

        <Input
          label="E-mail"
          value={email}
          type="email"
          error={errors.email}
          onChange={(ev) => onChangeInput('email', ev)}
          direction="column"
          margin="0 0 10px"
        />
        <Input
          label="Senha"
          value={password}
          type="password"
          error={errors.password}
          onChange={(ev) => onChangeInput('password', ev)}
          direction="column"
          margin="0 0 30px"
        />
        <Box display="flex">
          <Box flex="1">
            <Checkbox
              value={rememberOption}
              onChange={() => onChangeCheckBox()}
              label="Lembrar?"
            />
          </Box>
          <Box display="flex" flex="1" justifyContent="flex-end">
            {/* <Link to="/recuperar-senha" fontSize="12px" fontWeight="700">
              Esqueceu sua senha?
            </Link> */}
            <Link
              external
              to={`${api}/${versao}/api/usuarios/recuperar-senha`}
              fontSize="12px"
              fontWeight="700"
            >
              Esqueceu usa senha?
            </Link>
          </Box>
        </Box>
        <Button
          onClick={() => handleLogin()}
          margin="20px 0 0"
          variant="secondary.main"
          fullWidth
        >
          Entrar
        </Button>
      </Card>
    </Box>
  );
}

export default connect(null, actions)(Login);
