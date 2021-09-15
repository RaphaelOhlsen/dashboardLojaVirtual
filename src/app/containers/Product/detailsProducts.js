import React, { useState } from 'react';
import Button from '../../components/Button';
import { Box } from '../../components/foundation/layout/Box';
import Titulo from '../../components/Texto/Titulo';
import { DataText } from '../../components/Texto/Data';
import ValueInput from '../../components/Inputs/ValueInput';
import Link from '../../components/Link';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import PicturesBlock from '../../components/PicturesBlock';

export default function DetailsProduct() {
  const [state, setState] = useState({
    nome: 'Produto 1',
    disponibilidade: 'disponível',
    descricao: '',
    imagens: [
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
    ],
  });

  const handleSubmit = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const onRemove = (id) => {
    const novasImagens = state.imagens.filter((item, idx) => idx !== id);
    setState({ ...state, imagens: novasImagens });
  };

  const selectOptions = [
    { value: 'disponivel', label: 'Disponível' },
    { value: 'indisponivel', label: 'Indisponível' },
  ];

  return (
    <Box>
      <Button goback href="/produtos" />
      {/* Header start */}
      <Box display="flex" marginBottom="50px" alignItems="center">
        <Box display="flex" flex="1" flexDirection="column">
          <Titulo margin="0" tipo="h1">
            {state.nome}
          </Titulo>
          <Link to="/avaliacoes/asdasd">
            <small>Ver Avaliações</small>
          </Link>
        </Box>
        <Box>
          <Button variant="secondary.main" onClick={() => alert('Salvar')}>
            Salvar
          </Button>
        </Box>
      </Box>
      {/* Header end */}
      <Box display="flex">
        {/* Data start */}
        <Box display="flex" flex="1" flexDirection="column">
          <DataText
            dataKey="Nome"
            value={
              <ValueInput
                value={state.nome}
                name="nome"
                handleSubmit={(value) => handleSubmit('nome', value)}
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
            marginBottom="10px"
          />
          <DataText
            dataKey="Descrição"
            column
            value={
              <TextArea
                name="descrição"
                value={state.descricao}
                onChange={(ev) => {
                  setState({ ...state, descricao: ev.target.value });
                }}
                rows="10"
                width="90%"
                noResize
              />
            }
          />
        </Box>
        {/* Data end */}
        <Box display="flex" flex="1" flexDirection="column">
          {/* Images start */}
          <PicturesBlock
            pictures={state.imagens}
            handleSubmit={() => alert('enviado')}
            onRemove={onRemove}
          />
          {/* Images end */}
        </Box>
      </Box>
    </Box>
  );
}
