/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box } from '../../../components/foundation/layout/Box';
import { Wrapper } from './styles';
import Button from '../../../components/Button';

export default function TopBar({ handleLogout }) {
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
        <Button
          onClick={() => handleLogout()}
          padding="0"
          variant="black.main"
          hover="red"
        >
          <i className="fa fa-power-off" />
        </Button>
      </Box>
    </Wrapper>
  );
}
