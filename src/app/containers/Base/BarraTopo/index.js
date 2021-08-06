import React from 'react';
import { Box } from '../../../components/foundation/layout/Box';

export default function BarraTopo() {
  return (
    <Box display="flex" width="100%">
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
    </Box>
  );
}
