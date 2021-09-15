import React, { useState } from 'react';
import { Box } from '../../../components/foundation/layout/Box';
import Titulo from '../../../components/Texto/Titulo';
import { Wrapper } from './styles';

export default function Ranges() {
  const [state, setState] = useState({
    variacaoSelecionada: 'C8AS132JP7K',
    variacoes: [
      { nome: 'P', id: 'C8AS132JP7K' },
      { nome: 'M', id: 'C8AS132TRGH' },
    ],
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Titulo tipo="h2" margin="0 0 20px">
        Variações
      </Titulo>
      {state.variacoes.map((item, idx) => (
        <Wrapper
          onClick={() => setState({ ...state, variacaoSelecionada: item.id })}
          variacao={state.variacaoSelecionada}
          id={item.id}
          key={`range-${idx}`}
        >
          <span>{item.nome}</span>
        </Wrapper>
      ))}
    </Box>
  );
}
