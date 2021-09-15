import React, { useState } from 'react';

import { Box } from '../../../components/foundation/layout/Box';
import Titulo from '../../../components/Texto/Titulo';
import Button from '../../../components/Button';
import { DataText } from '../../../components/Texto/Data';
import ValueInput from '../../../components/Inputs/ValueInput';
import Select from '../../../components/Select';

export default function CategoryDetails() {
  const [state, setState] = useState({
    nome: 'Categoria',
    disponiblidade: 'disponivel',
    codigo: 'categoria',
  });

  const selectOptions = [
    { value: 'disponivel', label: 'Disponível' },
    { value: 'indisponivel', label: 'Indisponível' },
  ];

  return (
    <Box display="flex" flexDirection="column">
      <Button goback href="/categorias" />
      {/* header start */}
      <Box display="flex" marginBottom="20px">
        <Box display="flex" flex="1">
          <Titulo margin="0" tipo="h1">
            {state.nome}
          </Titulo>
        </Box>
        <Box display="flex" flex="1" justifyContent="flex-end">
          <Button
            onClick={() => alert('Salvo')}
            variant="secondary.main"
            margin="0 5px 0"
          >
            Salvar
          </Button>
          <Button onClick={() => alert('removido')} variant="tertiary.main">
            Remover
          </Button>
        </Box>
      </Box>
      {/* header end */}
      {/* data start */}
      <Box display="flex" flexDirection="column">
        <DataText
          dataKey="Código"
          value={
            <ValueInput
              name="codigo"
              value={state.codigo}
              handleSubmit={(value) => setState({ codigo: value })}
            />
          }
          marginBottom="10px"
        />
        <DataText
          dataKey="Nome"
          value={
            <ValueInput
              name="nome"
              value={state.nome}
              handleSubmit={(value) => setState({ nome: value })}
            />
          }
          marginBottom="10px"
        />
        <DataText
          dataKey="Disponibildade"
          value={
            <Select
              name="disponibilidaed"
              value={state.disponiblidade}
              onChange={(ev) => {
                setState({ ...state, disponiblidade: ev.target.value });
              }}
              options={selectOptions}
            />
          }
        />
      </Box>
      {/* data end */}
    </Box>
  );
}
