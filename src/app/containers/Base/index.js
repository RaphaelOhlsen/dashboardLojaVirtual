import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Box } from '../../components/foundation/layout/Box';
import TopBar from './TopBar';
import Menu from './Menu';

import * as actions from '../../actions';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.grey.light.color};
`;

function Dashboard({ children, history, handleLogout }) {
  return (
    <Box display="flex" height="100vh">
      <Box display="flex" flex-direction="vertical">
        <Menu history={history} />
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        <TopBar handleLogout={handleLogout} />
        <Wrapper>{children}</Wrapper>
      </Box>
    </Box>
  );
}

export default connect(null, actions)(Dashboard);
