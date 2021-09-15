import React from 'react';
import { Box } from '../../../components/foundation/layout/Box';
import { Wrapper } from './styles';

export default function TopBar() {
  return (
    <Wrapper>
      <Box
        display="flex"
        flex="1"
        justifyContent="flex-start"
        alignItems="center"
      >
        <a href="/">Ver Loja</a>
      </Box>
      <Box
        display="flex"
        flex="1"
        justifyContent="flex-end"
        alignItems="center"
      >
        <p>Sair</p>
      </Box>
    </Wrapper>
  );
}
