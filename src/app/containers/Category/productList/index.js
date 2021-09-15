import React, { useState } from 'react';

import Titulo from '../../../components/Texto/Titulo';
import Search from '../../../components/Inputs/Search';
import Table from '../../../components/Table/Standard';
import Pagination from '../../../components/Pagination/Standard';
import { Box } from '../../../components/foundation/layout/Box';

export default function ProductList() {
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
      Produto: 'Mouse',
      Estoue: 20,
      Disponibilidade: 'sim',
      botaoDetalhes: '/produto/9asdfsdf',
    },
    {
      Produto: 'Mouse 2',
      Estoue: 20,
      Disponibilidade: 'não',
      botaoDetalhes: '/produto/qweqweqwe',
    },
    {
      Produto: 'Mouse 3',
      Estoue: 20,
      Disponibilidade: 'sim',
      botaoDetalhes: '/produto/asdasdasd',
    },
    {
      Produto: 'Mouse',
      Estoue: 20,
      Disponibilidade: 'sim',
      botaoDetalhes: '/produto/lkjpasdf',
    },
  ];

  return (
    <Box width="100%">
      <Titulo tipo="h2" margin="0 0 50px">
        Produtos da Categoria
      </Titulo>
      <Search
        value={search}
        placeholder="Pesquise aqui pelo nome do produto ou descrição..."
        onChange={(ev) => onChangeSearch(ev)}
        onClick={() => alert('Pesquisar')}
      />
      <Box margin="30px 0">
        <Table header={['Produto', 'Estoque', 'Disponibilidade']} data={data} />
      </Box>

      <Pagination
        actual={actual}
        total={120}
        limit={20}
        onClick={(actualNumber) => changeActualNumber(actualNumber)}
      />
    </Box>
  );
}
