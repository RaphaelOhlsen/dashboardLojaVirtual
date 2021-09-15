import React, { useState } from 'react';
import Button from '../../../components/Button';
import { Box } from '../../../components/foundation/layout/Box';
import ValueInput from '../../../components/Inputs/ValueInput';
import { DataText } from '../../../components/Texto/Data';
import Titulo from '../../../components/Texto/Titulo';

export default function customerDetail() {
  const [state, setState] = useState({
    nome: 'Cliente 100',
    cpf: '111.222.333-45',
    telefone: '12 1234-5678',
    dataDeNascimento: '10/01/1995',
    email: 'cliente1@gmail.com',
    endereco: 'Rua Teste, 123',
    bairro: 'Centro',
    cidade: 'Bauru',
    estado: 'SP',
    cep: '14325-198',
  });

  const handleSubmit = (field, value) => {
    setState({ ...state, [field]: value });
  };

  return (
    <Box>
      <Button goback href="/clientes" />
      {/* header Start */}
      <Box display="flex" marginBottom="30px">
        <Box display="flex" flex="1">
          <Titulo tipo="h1" margin="0">
            {state.nome}
          </Titulo>
        </Box>
        <Box display="flex" flex="1" justifyContent="flex-end">
          <Button
            onClick={() => alert('Salvo!')}
            variant="secondary.main"
            margin="0 5px 0"
          >
            Salvar
          </Button>
          <Button onClick={() => alert('Removido!')} variant="tertiary.main">
            Remover
          </Button>
        </Box>
      </Box>
      {/* header Finish */}
      <Box display="flex">
        <Box display="flex" flexDirection="column" flex="1">
          {/* BaseDatails Start */}

          <DataText
            dataKey="Nome"
            value={
              <ValueInput
                value={state.nome}
                handleSubmit={(value) => handleSubmit('nome', value)}
                name="nome"
              />
            }
            marginBottom="10px"
          />
          <DataText
            dataKey="CPF"
            value={
              <ValueInput
                value={state.cpf}
                handleSubmit={(value) => handleSubmit('cpf', value)}
                name="cpf"
              />
            }
            marginBottom="10px"
          />
          <DataText
            dataKey="Telefone"
            value={
              <ValueInput
                value={state.telefone}
                handleSubmit={(value) => handleSubmit('telefone', value)}
                name="telefone"
              />
            }
            marginBottom="10px"
          />
          <DataText
            dataKey="E-mail"
            value={
              <ValueInput
                value={state.email}
                handleSubmit={(value) => handleSubmit('email', value)}
                name="email"
              />
            }
            marginBottom="10px"
          />
          <DataText
            dataKey="Data de Nascimento"
            value={
              <ValueInput
                value={state.dataDeNascimento}
                handleSubmit={(value) =>
                  handleSubmit('dataDeNascimento', value)
                }
                name="dataDeNascimento"
              />
            }
          />

          {/* BaseDatails Finish */}
        </Box>
        <Box display="flex" flex="1" flexDirection="column">
          {/* deliveryDetails Start */}
          <Box>
            <DataText
              dataKey="Endereço"
              value={
                <ValueInput
                  value={state.endereco}
                  handleSubmit={(value) => handleSubmit('endereco', value)}
                  name="endereco"
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Bairro"
              value={
                <ValueInput
                  value={state.bairro}
                  handleSubmit={(value) => handleSubmit('bairro', value)}
                  name="bairro"
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Estado"
              value={
                <ValueInput
                  value={state.estado}
                  handleSubmit={(value) => handleSubmit('estado', value)}
                  name="estado"
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Cidade"
              value={
                <ValueInput
                  value={state.cidade}
                  handleSubmit={(value) => handleSubmit('cidade', value)}
                  name="cidade"
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="CEP"
              value={
                <ValueInput
                  value={state.cep}
                  handleSubmit={(value) => handleSubmit('cep', value)}
                  name="cep"
                />
              }
            />
          </Box>
          {/* deliveryDetails Finish */}
        </Box>
      </Box>
    </Box>
  );
}
