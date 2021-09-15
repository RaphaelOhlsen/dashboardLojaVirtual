import React from 'react';
import styled from 'styled-components';
import { Box } from '../../components/foundation/layout/Box';
import TopBar from './TopBar';
import Menu from './Menu';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.grey.light.color};
`;

export default function Dashboard({ children, history }) {
  return (
    <Box display="flex" height="100vh">
      <Box display="flex" flex-direction="vertical">
        <Menu history={history} />
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        <TopBar />
        <Wrapper>{children}</Wrapper>
      </Box>
    </Box>
  );
}
