import React, { useState } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Search from '../../components/Inputs/Search';
import Table from '../../components/Table/Standard';
import Pagination from '../../components/Pagination/Standard';

export default function Pedidos() {
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
    <div calssName="Pedidos">
      <div className="Card">
        <Titulo tipo="h1" titulo="Pedidos" />
        <br />
        <Search
          value={search}
          placeholder="Pesquise aqui pelo nome do cliente..."
          onChange={(ev) => onChangeSearch(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <Table
          header={['Cliente', 'Valor Total', 'Data', 'Status']}
          data={data}
        />
        <Pagination
          actual={actual}
          total={120}
          limit={20}
          onClick={(actualNumber) => changeActualNumber(actualNumber)}
        />
      </div>
    </div>
  );
}
