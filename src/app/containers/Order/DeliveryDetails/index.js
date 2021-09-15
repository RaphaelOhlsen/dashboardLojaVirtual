/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Titulo from '../../../components/Texto/Titulo';
import DynamicList from '../../../components/List/DynamicList';
import ValueInput from '../../../components/Inputs/ValueInput';
import { Box } from '../../../components/foundation/layout/Box';

export default function DeliveryDetails() {
  const [state, setState] = useState({
    status: [
      'Preparando para Envio',
      'Entregue a Transportadora',
      'Em trânsito',
    ],
    trackingCode: 'PA123456912PT',
  });

  function onAddDynamicList(text) {
    if (!text) return false;
    const { status } = state;
    status.push(text);
    setState({ ...state, status });
    return true;
  }

  function handleSubmit(value) {
    setState({ ...state, trackingCode: value });
    alert('Salvo');
  }

  return (
    <Box>
      <Titulo tipo="h3" margin="0 0 25px">
        Entrega
      </Titulo>

      <label>Código de Rastreamento</label>
      <Box margin="10px 0">
        <ValueInput
          withStyle
          value={state.trackingCode}
          handleSubmit={(value) => handleSubmit(value)}
          name="trackingCode"
        />
      </Box>

      <DynamicList data={state.status} onAdd={onAddDynamicList} />
    </Box>
  );
}
