import React, { useState } from 'react';
import styled from 'styled-components';
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Standard';
import Button from '../../components/Button';
import { Box } from '../../components/foundation/layout/Box';
import { Card } from '../../components/Card';

const Wrapper = styled.div`
  & p {
    margin-bottom: 15px;
  }
  margin-bottom: 40px;
`;

export default function ResetPassord() {
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword } = state;

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
          <p>
            Para reiniciar a senha, digite a nova senha e confirme no campo
            abaixo{' '}
          </p>
        </Wrapper>
        <Box>
          <Input
            label="Senha"
            value={password}
            type="password"
            onChange={(ev) => onChangeInput('password', ev)}
            direction="column"
            margin="0 0 10px"
          />
          <Input
            label="Confirmar Senha"
            value={confirmPassword}
            type="password"
            onChange={(ev) => onChangeInput('confirmPassword', ev)}
            direction="column"
            margin="0 0 30px"
          />
        </Box>
        <Box>
          <Button
            variant="secondary.main"
            href="/resetar-senha/1"
            fullWidth
            margin="20px 0 0"
          >
            Confirmar Senha
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
