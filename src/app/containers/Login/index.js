import React, { useState } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Standard';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { Box } from '../../components/foundation/layout/Box';
import { Card } from '../../components/Card';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
    rememberOption: false,
  });
  const { email, password, rememberOption } = state;

  function onChangeInput(field, ev) {
    return setState({ [field]: ev.target.value });
  }

  function onChangeCheckBox() {
    return setState({ rememberOption: !rememberOption });
  }
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
          onChange={(ev) => onChangeInput('email', ev)}
          direction="column"
          margin="0 0 10px"
        />
        <Input
          label="Senha"
          value={password}
          type="password"
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
            <Link to="/recuperar-senha" fontSize="12px" fontWeight="700">
              Esqueceu sua senha?
            </Link>
          </Box>
        </Box>
        <Button margin="20px 0 0" variant="secondary.main" href="/" fullWidth>
          Entrar
        </Button>
      </Card>
    </Box>
  );
}
