import React from 'react';
// import styled from 'styled-components';
import Button from '../../../components/Button';
import Titulo from '../../../components/Texto/Titulo';
import { DataText } from '../../../components/Texto/Data';
import StandardTable from '../../../components/Table/Standard';
import { Box } from '../../../components/foundation/layout/Box';

export default function OrderDetails() {
  const header = () => (
    <Box display="flex" justifyContent="space-between" margin="10px 0 30px">
      <Box display="flex" alignItems="center">
        <Titulo tipo="h2">Pedido - Cliente 1 - 04/04/2019</Titulo>
      </Box>
      <Box>
        <Button
          variant="tertiary.main"
          label="CANCELAR PEDIDO"
          onClick={() => alert('Cancelado')}
        >
          Cancelar Pedido
        </Button>
      </Box>
    </Box>
  );

  const dataClient = () => (
    <Box dispaly="flex" flex="2">
      <Titulo tipo="h4">Dados do Cliente</Titulo>
      <Box marginTop="15px">
        <DataText dataKey="Nome" value="Cliente 1" />
        <DataText dataKey="CPF" value="111.222.333-45" />
        <DataText dataKey="Telefone" value="11 1234-5678" />
        <DataText dataKey="Data de Nascimento" value="10/04/1990" />
      </Box>
    </Box>
  );

  const dataDelivery = () => (
    <Box dispaly="flex" flex="2">
      <Titulo tipo="h4">Dados de Entrega</Titulo>
      <Box marginTop="15px">
        <DataText dataKey="Endereço" value="Rua Teste, 123" />
        <DataText dataKey="Bairro" value="Centro" />
        <DataText dataKey="Cidade" value="Uberaba" />
        <DataText dataKey="Estado" value="Minas Gerais" />
        <DataText dataKey="CEP" value="38540-123" />
      </Box>
    </Box>
  );

  const dataPayment = () => (
    <Box dispaly="flex" flex="3">
      <Titulo tipo="h4">Dados de Pagamento</Titulo>
      <Box marginTop="15px">
        <DataText dataKey="Taxa de Entrega" value="R$ 15,50 (PAC)" />
        <DataText dataKey="Valor Pedido" value="R$ 32,00" />
        <DataText dataKey="Valor Total" value="R$ 47,50" />
        <DataText dataKey="Forma de Pagamento" value="BOLETO" />
      </Box>
    </Box>
  );

  const dataCart = () => {
    const data = [
      {
        Produto: 'Produto 1',
        'Preço Und.': 'R$ 12,00',
        Quantidade: '1',
        'Preço Total': 'R$ 12,00',
      },
      {
        Produto: 'Produto 2',
        'Preço Und.': 'R$ 10,00',
        Quantidade: '2',
        'Preço Total': 'R$ 20,00',
      },
    ];

    return (
      <Box dispaly="flex" flex="3">
        <Titulo tipo="h4">Carrinho</Titulo>
        <Box marginTop="15px">
          <StandardTable
            header={['Produto', 'Preço Und.', 'Quantidade', 'Preço Total']}
            data={data}
          />
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      {header()}
      <Box display="flex" flexDirection="column">
        <Box display="flex" marginBottom="35px">
          {dataClient()}
          {dataCart()}
        </Box>
        <Box display="flex">
          {dataDelivery()}
          {dataPayment()}
        </Box>
      </Box>
    </Box>
  );
}
