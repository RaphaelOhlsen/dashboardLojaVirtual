import React, { useState } from 'react';
import Titulo from '../../../components/Texto/Titulo';
import DynamicList from '../../../components/List/DynamicList';

export default function PaymentDetails() {
  const [state, setState] = useState({
    status: ['Aguardando Pagamento', 'Processando Pagamento'],
  });

  // function onRemoveDynamicList(index) {
  //   let { status } = state;
  //   status = status.filter((item, _index) => _index !== index);
  //   setState({ status });
  // }

  function onAddDynamicList(text) {
    if (!text) return false;
    const { status } = state;
    status.push(text);
    setState({ status });
    return true;
  }

  return (
    <div className="Detalhes-do-Pagamento">
      <Titulo tipo="h3" margin="0 0 25px">
        Pagamento
      </Titulo>

      <DynamicList
        data={state.status}
        // onRemove={onRemoveDynamicList}
        onAdd={onAddDynamicList}
      />
    </div>
  );
}
