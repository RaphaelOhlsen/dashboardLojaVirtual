import React, { useState } from 'react';

import styled from 'styled-components';
import { Box } from '../../components/foundation/layout/Box';
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Standard';
import Button from '../../components/Button';
import { Card } from '../../components/Card';

const Wrapper = styled.div`
  & p {
    margin-bottom: 15px;
  }
  margin-bottom: 40px;
`;

export default function RecoverPassord() {
  const [state, setState] = useState({
    email: '',
  });

  const { email } = state;

  function onChangeInput(field, ev) {
    return setState({ [field]: ev.target.value });
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Card width="95%" maxWidth="450px">
        <Box display="flex" justifyContent="center">
          <Titulo
            tipo="h1"
            variant="standard.main"
            fontSize="3rem"
            margin="10px 0 50px"
          >
            Loja TI
          </Titulo>
        </Box>

        <Wrapper>
          <p>Para reiniciar sua senha, digite seu e-mail abaixo.</p>
          <p>
            Iremos enviar um link para você acessar e entrar com uma nova senha.
          </p>
        </Wrapper>
        <Box>
          <Input
            label="E-mail"
            value={email}
            onChange={(ev) => onChangeInput('email', ev)}
            type="email"
            direction="column"
          />
        </Box>
        <Box>
          <Button
            variant="secondary.main"
            href="/resetar-senha/1"
            fullWidth
            margin="20px 0 0"
          >
            Resetar Senha
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
