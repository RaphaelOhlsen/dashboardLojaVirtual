import React, { useState } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Search from '../../components/Inputs/Search';
import Table from '../../components/Table/Standard';
import Pagination from '../../components/Pagination/Standard';
import { Box } from '../../components/foundation/layout/Box';

import { Card } from '../../components/Card';

export default function Categories() {
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
      Categoria: 'Acessórios',
      'Qtd de Produtos': 15,
      botaoDetalhes: '/categoria/acessorios',
    },
    {
      Categoria: 'Computadores',
      'Qtd de Produtos': 5,
      botaoDetalhes: '/categoria/computadores',
    },
    {
      Categoria: 'Fones de Ouvido',
      'Qtd de Produtos': 15,
      botaoDetalhes: '/categoria/fones',
    },
    {
      Categoria: 'Gabinetes',
      'Qtd de Produtos': 3,
      botaoDetalhes: '/categoria/gabinetes',
    },
    {
      Categoria: 'Processadores',
      'Qtd de Produtos': 15,
      botaoDetalhes: '/categoria/processadores',
    },
  ];

  return (
    <Box width="100%">
      <Card>
        <Titulo tipo="h1" margin="0 0 50px">
          Categorias
        </Titulo>
        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome da categoria..."
          onChange={(ev) => onChangeSearch(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <Box margin="30px 0">
          <Table header={['Categoria', 'Qtd de Produtos']} data={data} />
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
