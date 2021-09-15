import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { Box } from '../../components/foundation/layout/Box';

export default function Teste() {
  const [state] = useState({
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

  // const keyState = Object.keys(state);

  // const title = {
  //   nome: 'Nome',
  //   cpf: 'CPF',
  // };

  // const keyTitle = Object.keys(title);

  return (
    <Box width="100%">
      <Card>
        <table>
          <tbody>
            <tr>
              <td>{state.nome}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Box>
  );
}
