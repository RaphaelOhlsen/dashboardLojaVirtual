import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Button/index';
import TableInput from '../../Inputs/TableInput';

const Wrapper = styled.div`
  table {
    border-collapse: collapse;
  }

  tr {
    td {
      padding: 0 15px 10px 0;
    }
  }
`;

export default function DataTable() {
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
    <Wrapper>
      <table>
        <tr>
          <td>Nome</td>
          <TableInput
            handleSubmit={(value) => handleSubmit('nome', value)}
            value={state.nome}
          />
        </tr>
        <tr>
          <td>CPF</td>
          <td>111.222.333-45</td>
          <td>
            <Button small>Editar</Button>
          </td>
        </tr>
        <tr>
          <td>Telefone</td>
          <td>11 1234-5678</td>
          <td>
            <Button small>Editar</Button>
          </td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>cliente1@gmail.com</td>
          <td>
            <Button small>Editar</Button>
          </td>
        </tr>
        <tr>
          <td>Data de Nascimento</td>
          <td>10/01/1995</td>
          <td>
            <Button small>Editar</Button>
          </td>
        </tr>
      </table>
    </Wrapper>
  );
}
