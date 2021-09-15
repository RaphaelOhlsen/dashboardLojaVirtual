import React, { useState } from 'react';
import Button from '../../components/Button';
import { Card } from '../../components/Card';
import { Box } from '../../components/foundation/layout/Box';
import ValueInput from '../../components/Inputs/ValueInput';
import { DataText } from '../../components/Texto/Data';
import Titulo from '../../components/Texto/Titulo';
import DynamicList from '../../components/List/DynamicList';

export default function Configurations() {
  const [state, setState] = useState({
    nome: 'Loja IT',
    CNPJ: '11.123.456/0001-02',
    email: 'atendimento@lojait.com',
    endereco: 'Rua Teste, 1',
    bairro: 'Centro',
    cidade: 'Piracicaba',
    estado: 'SP',
    cep: '12345-123',
    telefones: ['11 1234-5678', '11 7867-4556'],
  });

  const onAdd = (value) => {
    if (value) {
      setState({ ...state, telefones: [...state.telefones, value] });
    }
    return false;
  };

  const onRemove = (idx) => {
    const newTelefones = state.telefones.filter((item, index) => index !== idx);
    setState({ ...state, telefones: newTelefones });

    return false;
  };

  return (
    <Box width="100%">
      <Card>
        {/* header start */}
        <Box display="flex" marginBottom="50px">
          <Box display="flex" flex="1">
            <Titulo tipo="h1" margin="0">
              Configurações
            </Titulo>
          </Box>
          <Button variant="secondary.main" onClick={() => alert('Salvo')}>
            Salvar
          </Button>
        </Box>
        {/* header end */}
        <Box display="flex" flexDirection="column">
          <Box flex="1" marginBottom="20px">
            {/* configurationData start */}
            <Box>
              <DataText
                dataKey="Nome"
                value={
                  <ValueInput
                    value={state.nome}
                    name="nome"
                    handleSubmit={(value) =>
                      setState({ ...state, nome: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="CNPJ"
                value={
                  <ValueInput
                    value={state.CNPJ}
                    name="cnpj"
                    handleSubmit={(value) =>
                      setState({ ...state, CNPJ: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="E-mail"
                value={
                  <ValueInput
                    value={state.email}
                    name="email"
                    type="email"
                    handleSubmit={(value) =>
                      setState({ ...state, email: value })
                    }
                  />
                }
              />
            </Box>
            {/* CofigurationData end */}
          </Box>
          <hr />
          <Box display="flex" marginTop="20px" flexWrap="wrap">
            {/* dataAddress start */}
            <Box flex="1" minWidth="274px">
              <DataText
                dataKey="Endereco"
                value={
                  <ValueInput
                    value={state.endereco}
                    name="endereco"
                    handleSubmit={(value) =>
                      setState({ ...state, endereco: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="Bairro"
                value={
                  <ValueInput
                    value={state.bairro}
                    name="bairro"
                    handleSubmit={(value) =>
                      setState({ ...state, bairro: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="Cidade"
                value={
                  <ValueInput
                    value={state.cidade}
                    name="cidade"
                    handleSubmit={(value) =>
                      setState({ ...state, cidade: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="Estado"
                value={
                  <ValueInput
                    value={state.estado}
                    name="estado"
                    handleSubmit={(value) =>
                      setState({ ...state, estado: value })
                    }
                  />
                }
                marginBottom="10px"
              />
              <DataText
                dataKey="CEP"
                value={
                  <ValueInput
                    value={state.cep}
                    name="cep"
                    handleSubmit={(value) => setState({ ...state, cep: value })}
                  />
                }
              />
            </Box>
            {/* dataAddress end */}
            <Box flex="1">
              {/* phoneNumbers start */}
              <Box width="342px" marginTop="10px">
                <Titulo tipo="h3" margin="0 0 20px">
                  Telefones
                </Titulo>
                <DynamicList
                  data={state.telefones}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </Box>
              {/* phoneNumbers end */}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
