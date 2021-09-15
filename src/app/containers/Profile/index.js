import React, { useState } from 'react';
import Button from '../../components/Button';
import { Card } from '../../components/Card';
import { Box } from '../../components/foundation/layout/Box';
import ValueInput from '../../components/Inputs/ValueInput';
import { DataText } from '../../components/Texto/Data';
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Standard';

export default function Profile() {
  const [state, setState] = useState({
    nome: 'Usuário Teste',
    email: 'usuario@teste.com',
    telefone: '11 1234-1234',

    senhaAntiga: '',
    novaSenha: '',
    confirmarNovaSenha: '',
  });

  return (
    <Box width="100%">
      <Card>
        {/* header start */}
        <Box display="flex" marginBottom="50px">
          <Box display="flex" flex="1">
            <Titulo tipo="h1" margin="0">
              Perfil
            </Titulo>
          </Box>
          <Button variant="secondary.main" onClick={() => alert('Salvo')}>
            Salvar
          </Button>
        </Box>
        {/* header end */}
        <Box display="flex">
          {/* configurationData start */}
          <Box flex="1">
            <DataText
              dataKey="Nome"
              value={
                <ValueInput
                  value={state.nome}
                  name="nome"
                  handleSubmit={(value) => setState({ ...state, nome: value })}
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="E-mail"
              value={
                <ValueInput
                  value={state.email}
                  name="email"
                  type="email"
                  handleSubmit={(value) => setState({ ...state, email: value })}
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Telefone"
              value={
                <ValueInput
                  value={state.telefone}
                  name="telefone"
                  handleSubmit={(value) =>
                    setState({ ...state, telefone: value })
                  }
                />
              }
            />
          </Box>
          {/* CofigurationData end */}
          {/* dataPassword start */}
          <Box display="flex" flex="1" flexDirection="column">
            {/* dataPassword end */}
            <Input
              type="password"
              direction="column"
              name="senha-antiga"
              label="Senha Antiga"
              value={state.senhaAntiga}
              handleSubmit={(value) =>
                setState({ ...state, senhaAntiga: value })
              }
              marginBottom="10px"
            />
            <Input
              type="password"
              direction="column"
              name="nova-senha"
              label="Nova Senha"
              value={state.novaSenha}
              handleSubmit={(value) => setState({ ...state, novaSenha: value })}
              marginBottom="10px"
            />
            <Input
              type="password"
              direction="column"
              name="confirmar-nova-senha"
              label="Confirmar Nova Senha"
              value={state.confirmarNovaSenha}
              handleSubmit={(value) =>
                setState({ ...state, confirmarNovaSenha: value })
              }
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
