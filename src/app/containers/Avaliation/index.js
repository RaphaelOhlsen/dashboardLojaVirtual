import React from 'react';
import Button from '../../components/Button';
import { Card } from '../../components/Card';
import { Box } from '../../components/foundation/layout/Box';
import Titulo from '../../components/Texto/Titulo';

export default function Avaliation() {
  return (
    <Box width="100%">
      <Card>
        <Button goback href="/avaliacoes/345345" />
        {/* header start */}
        <Box display="flex" margin="5px 0 50px" alignItems="center">
          <Box display="flex" flex="1" flexDirection="column">
            <Titulo tipo="h3">Avaliação - Produto 1</Titulo>
            <Titulo tipo="h4">Cliente - Cliente 1</Titulo>
          </Box>
          <Button variant="tertiary.main" onClick={() => alert('deletado')}>
            Remover
          </Button>
        </Box>
        {/* header end */}
        {/* message start */}
        <Box>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </p>
        </Box>
        {/* message end */}
      </Card>
    </Box>
  );
}
