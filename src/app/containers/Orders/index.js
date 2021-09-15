import React, { useState } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Search from '../../components/Inputs/Search';
import Table from '../../components/Table/Standard';
import Pagination from '../../components/Pagination/Standard';
import { Box } from '../../components/foundation/layout/Box';

import { Card } from '../../components/Card';

export default function Orders() {
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
      'Valor Total': 89.9,
      Data: moment().toISOString(),
      Status: 'Aguardando Pagamento',
      botaoDetalhes: '/pedido/yuyhjker',
    },
    {
      Cliente: 'Cliente 2',
      'Valor Total': 105.9,
      Data: moment().toISOString(),
      Status: 'Aguardando Pagamento',
      botaoDetalhes: '/pedido/345dsfsdfsdf',
    },
    {
      Cliente: 'Cliente 1',
      'Valor Total': 26.72,
      Data: moment().toISOString(),
      Status: 'Pagamento Concluido',
      botaoDetalhes: '/pedido/234vbn',
    },
  ];

  return (
    <Box width="100%">
      <Card>
        <Titulo tipo="h1" margin="0 0 50px">
          Pedidos
        </Titulo>

        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome do cliente..."
          onChange={(ev) => onChangeSearch(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <Box margin="30px 0">
          <Table
            header={['Cliente', 'Valor Total', 'Data', 'Status']}
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
