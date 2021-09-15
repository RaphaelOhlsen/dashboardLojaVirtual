/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Button from '../../Button';
import { Box } from '../../foundation/layout/Box';

const WrapperData = styled.span`
  padding: 8px 12px;
  font-size: 0.95rem;
  border-radius: 5px;
  margin-right: 5px;
  ${({ withStyle }) =>
    withStyle &&
    css`
      color: ${({ theme }) => theme.colors.grey.medium.color};
      border: 1px solid ${({ theme }) => theme.colors.grey.medium.color};
      background-color: ${({ theme }) => theme.colors.grey.light.color};
    `}
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey.medium.color};
  padding: 8px 12px;
  font-size: 0.95rem;
  border-radius: 5px;
`;

export default function ValueInput(props) {
  if (props.type) console.log('Tipo numero');

  const [state, setState] = useState({
    value: props.value,
    form: false,
  });

  function onChange(ev) {
    setState({ ...state, value: ev.target.value });
  }

  function toggleForm() {
    setState({ form: !state.form, value: props.value });
  }

  function handleSubmit(value) {
    props.handleSubmit(value);
  }

  function handleKeyPress(ev) {
    if (ev.key === 'Enter') {
      handleSubmit(state.value);
      toggleForm();
    }
  }

  return state.form ? (
    <Box display="flex" alignItems="center">
      <Box marginRight="5px">
        <Input
          value={state.value}
          type={props.type || 'text'}
          name={props.name}
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="65px"
      >
        <Button
          onClick={() => {
            handleSubmit(state.value);
            toggleForm();
          }}
          variant="secondary.main"
          margin="0 5px 0 0"
          icon
        >
          <i className="fas fa-check" />
        </Button>
        <Button onClick={toggleForm} variant="tertiary.main" icon>
          <i className="fas fa-times" />
        </Button>
      </Box>
    </Box>
  ) : (
    <Box display="flex" onClick={toggleForm} alignItems="center">
      <WrapperData {...props}>{props.value}</WrapperData>
      <Button variant="warning.main" icon>
        <i className="fas fa-edit" />
      </Button>
    </Box>
  );
}
