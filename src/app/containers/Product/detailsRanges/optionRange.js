import React, { useState } from 'react';
import Button from '../../../components/Button';
import { Box } from '../../../components/foundation/layout/Box';
import ValueInput from '../../../components/Inputs/ValueInput';
import PicturesBlock from '../../../components/PicturesBlock';
import Select from '../../../components/Select';
import { DataText } from '../../../components/Texto/Data';
import Titulo from '../../../components/Texto/Titulo';

export default function OptionRange() {
  const [state, setState] = useState({
    nome: 'P',
    disponibilidade: 'disponivel',
    preco: 30,
    promocao: 25,
    quantidade: 200,
    peso: 0.75,
    largura: 3,
    altura: 5,
    comprimento: 17,
    imagens: [
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
    ],
  });

  const selectOptions = [
    { value: 'disponivel', label: 'Disponível' },
    { value: 'indisponivel', label: 'Indisponível' },
  ];

  const handleSubmit = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const onRemove = (id) => {
    const novasImagens = state.imagens.filter((item, idx) => idx !== id);
    setState({ ...state, imagens: novasImagens });
  };

  return (
    <Box>
      {/* header start */}
      <Box display="flex" alignItems="center" marginBottom="30px">
        <Box flex="1">
          <Titulo tipo="h2">{`Variação - ${state.nome}`}</Titulo>
        </Box>
        <Button variant="secondary.main" onClick={() => alert('Salvo')}>
          Salvar
        </Button>
      </Box>
      {/* header end */}

      <Box display="flex" flexWrap="wrap">
        <Box flex="1">
          {/* registrationData start */}
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
                  name="disponibilidade"
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
              dataKey="Preço Padrão"
              value={
                <ValueInput
                  value={state.preco}
                  name="preco"
                  type="number"
                  handleSubmit={(value) => handleSubmit('preco', Number(value))}
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Preço Promocional"
              value={
                <ValueInput
                  value={state.promocao}
                  name="promocao"
                  handleSubmit={(value) =>
                    handleSubmit('promocao', Number(value))
                  }
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Quantidade"
              value={
                <ValueInput
                  value={state.quantidade}
                  name="quantidade"
                  handleSubmit={(value) => handleSubmit('quantidade', value)}
                />
              }
              marginBottom="10px"
            />
          </Box>
          {/* registrationData end */}
        </Box>
        <Box flex="1">
          {/* deliveryData start */}
          <Box>
            <DataText
              dataKey="Peso (Kg)"
              value={
                <ValueInput
                  value={state.peso}
                  name="peso"
                  type="number"
                  handleSubmit={(value) => handleSubmit('peso', Number(value))}
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Largura (cm)"
              value={
                <ValueInput
                  value={state.largura}
                  name="largura"
                  type="number"
                  handleSubmit={(value) =>
                    handleSubmit('largura', Number(value))
                  }
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Comprimento (cm)"
              value={
                <ValueInput
                  value={state.comprimento}
                  name="comprimento"
                  type="number"
                  handleSubmit={(value) =>
                    handleSubmit('comprimento', Number(value))
                  }
                />
              }
              marginBottom="10px"
            />
            <DataText
              dataKey="Altura (cm)"
              value={
                <ValueInput
                  value={state.altura}
                  name="altura"
                  type="number"
                  handleSubmit={(value) =>
                    handleSubmit('comprimento', Number(value))
                  }
                />
              }
              marginBottom="10px"
            />
          </Box>
          {/* deliveryData end */}
        </Box>
        <Box flex="1">
          {/* pictures start */}
          <PicturesBlock
            pictures={state.imagens}
            handleSubmit={() => alert('enviado')}
            onRemove={onRemove}
          />
          {/* pictures end */}
        </Box>
      </Box>
    </Box>
  );
}
