import React from 'react';
import { Box } from '../../components/foundation/layout/Box';
import BarraTopo from './BarraTopo';
import Menu from './Menu';

export default function Dashboard({ children, history }) {
  return (
    <Box display="flex" height="100vh">
      <Box display="flex" flex-direction="vertical">
        <Menu history={history} />
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        <BarraTopo />
        <Box display="flex" height="100vh">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
