import React from 'react';
import moment from 'moment';

import Titulo from '../../../components/Texto/Titulo';
import Table from '../../../components/Table/Standard';
import { Box } from '../../../components/foundation/layout/Box';

export default function orderDetails() {
  const data = [
    {
      id: 'yuyhjker',
      'Valor Total': 89.9,
      Data: moment().toISOString(),
      Status: 'Aguardando Pagamento',
      botaoDetalhes: '/pedido/yuyhjker',
    },
    {
      id: '345dsfsdfsdf',
      'Valor Total': 105.9,
      Data: moment().toISOString(),
      Status: 'Aguardando Pagamento',
      botaoDetalhes: '/pedido/345dsfsdfsdf',
    },
    {
      id: '234vbn',
      'Valor Total': 26.72,
      Data: moment().toISOString(),
      Status: 'Pagamento Concluido',
      botaoDetalhes: '/pedido/234vbn',
    },
  ];

  return (
    <Box width="100%">
      <Box>
        <Titulo tipo="h3" margin="0 0 50px">
          Pedidos Feitos
        </Titulo>
        <Box margin="30px 0">
          <Table header={['id', 'Valor Total', 'Data', 'Status']} data={data} />
        </Box>
      </Box>
    </Box>
  );
}
