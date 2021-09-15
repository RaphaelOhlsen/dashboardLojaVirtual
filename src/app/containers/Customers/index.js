import React, { useState } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Search from '../../components/Inputs/Search';
import Table from '../../components/Table/Standard';
import Pagination from '../../components/Pagination/Standard';
import { Box } from '../../components/foundation/layout/Box';

import { Card } from '../../components/Card';

export default function Customers() {
  const [search, setSearch] = useState('');
  const [actual, setActual] = useState(0);

  function onChangeSearch(ev) {
    setSearch(ev.target.value);
  }

  function changeActualNumber(actualNumber) {
    setActual(actualNumber);
  }

  const data = [
    {
      Cliente: 'Cliente 1',
      'E-mail': 'cliente1@gmail.com',
      Telefone: '11 1234-5678',
      CPF: '111.222.333-45',
      botaoDetalhes: '/cliente/cliente1@gmail.com',
    },
    {
      Cliente: 'Cliente 2',
      'E-mail': 'cliente2@gmail.com',
      Telefone: '11 1234-5678',
      CPF: '111.222.333-45',
      botaoDetalhes: '/cliente/cliente2@gmail.com',
    },
    {
      Cliente: 'Cliente 3',
      'E-mail': 'cliente3@gmail.com',
      Telefone: '11 1234-5678',
      CPF: '111.222.333-45',
      botaoDetalhes: '/cliente/cliente3@gmail.com',
    },
    {
      Cliente: 'Cliente 4',
      'E-mail': 'cliente4@gmail.com',
      Telefone: '11 1234-5678',
      CPF: '111.222.333-45',
      botaoDetalhes: '/cliente/cliente4@gmail.com',
    },
  ];

  return (
    <Box width="100%">
      <Card>
        <Titulo tipo="h1" margin="0 0 50px">
          Clientes
        </Titulo>
        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome do cliente..."
          onChange={(ev) => onChangeSearch(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <Box margin="30px 0">
          <Table
            header={['Cliente', 'E-mail', 'Telefone', 'CPF']}
            data={data}
          />
        </Box>

        <Pagination
          actual={actual}
          total={120}
          limit={20}
          onClick={(actualNumber) => changeActualNumber(actualNumber)}
        />
      </Card>
    </Box>
  );
}
