import React from 'react';

import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Table from '../../components/Table/Standard';
import { Box } from '../../components/foundation/layout/Box';

import { Card } from '../../components/Card';
import Button from '../../components/Button';

export default function Avaliations() {
  const data = [
    {
      Cliente: 'Cliente 1',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
    {
      Cliente: 'Cliente 2',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
    {
      Cliente: 'Cliente 3',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
    {
      Cliente: 'Cliente 4',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
    {
      Cliente: 'Cliente 5',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
    {
      Cliente: 'Cliente 6',
      Data: moment().toISOString(),
      botaoDetalhes: '/avaliacao/213asdaweqwe',
    },
  ];

  return (
    <Box width="100%">
      <Card>
        <Button goback href="/produto/345345" />
        <Titulo tipo="h1" margin="0 0 50px">
          Avaliações - Produto 1
        </Titulo>

        <Box margin="30px 0">
          <Table header={['Cliente', 'Data']} data={data} />
        </Box>
      </Card>
    </Box>
  );
}
