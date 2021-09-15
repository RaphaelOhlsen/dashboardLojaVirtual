/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Search from '../../components/Inputs/Search';
import Table from '../../components/Table/Standard';
import Pagination from '../../components/Pagination/Standard';
import { Box } from '../../components/foundation/layout/Box';
import Select from '../../components/Select';

import { Card } from '../../components/Card';

export default function Products() {
  const [search, setSearch] = useState('');
  const [actual, setActual] = useState(0);

  function onChangeSearch(ev) {
    setSearch(ev.target.value);
  }

  function changeActualNumber(actualNumber) {
    setActual(actualNumber);
  }

  const selectOptions = [
    { value: '', label: 'Padrão' },
    { value: 'oaA-Z', label: 'Alfabética A-Z' },
    { value: 'oaZ-A', label: 'Alfabética Z-A' },
    { value: 'oaA-Z', label: 'Menor Preço' },
    { value: 'oaA-Z', label: 'Maior Preço' },
  ];
  const data = [
    {
      Produto: 'Mouse 1',
      Categoria: 'acessorios',
      Disponivel: 'sim',
      botaoDetalhes: '/produto/12afsdfsdf',
    },
    {
      Produto: 'Mouse 2',
      Categoria: 'acessorios',
      Disponivel: 'sim',
      botaoDetalhes: '/produto/23412fsdfsdf',
    },
    {
      Produto: 'Mouse 3',
      Categoria: 'acessorios',
      Disponivel: 'sim',
      botaoDetalhes: '/produto/12afsdfsdf',
    },
    {
      Produto: 'Mouse 4',
      Categoria: 'acessorios',
      Disponivel: 'sim',
      botaoDetalhes: '/produto/12afsdfsdf',
    },
  ];

  return (
    <Box width="100%">
      <Card>
        <Titulo tipo="h1" margin="0 0 30px">
          Produtos
        </Titulo>
        <Box display="flex" aligmItems="center" height="80px">
          <Box flex="3" marginTop="20px">
            <Search
              value={search}
              placeholder="Pesquise aqui pelo nome do produto, decricão ou categoria..."
              onChange={(ev) => onChangeSearch(ev)}
              onClick={() => alert('Pesquisar')}
            />
          </Box>
          <Box display="flex" flex="1" flexDirection="column">
            <label>
              <Box margin="0 0 5px 5px">
                <small>Ordenar por:</small>
              </Box>
            </label>
            <Select defaultValue="" options={selectOptions} />
          </Box>
          <Box flex="1" />
        </Box>

        <Box margin="30px 0">
          <Table header={['Produto', 'Categoria', 'Disponivel']} data={data} />
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
