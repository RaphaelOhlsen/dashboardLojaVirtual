import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import StandardInput from '../../Inputs/Standard';
import { Box } from '../../foundation/layout/Box';

const ItemWrapper = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  border-left: 5px solid ${({ theme }) => theme.colors.secondary.main.color};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin: 3px 0;
  padding: 2px 0 2px 2px;
`;

export default function DynamicList({ data, onRemove, onAdd }) {
  const [state, setState] = useState({ text: '' });
  const { text } = state;

  function onChangeInput(ev) {
    setState({ text: ev.target.value });
  }

  const handleKeyPress = (ev) => {
    if (text && ev.key === 'Enter') {
      onAdd(text);
      setState({ text: '' });
    }
  };
  return (
    <Box display="flex" flexDirection="column">
      {data.map((item, idx) => (
        <Box key={`row-${idx}`} display="flex" alignItems="center">
          <ItemWrapper>
            <span>{item}</span>
          </ItemWrapper>
          {onRemove && (
            <Box display="flex" flex="1" justifyContent="flex-center">
              <Button
                variant="tertiary.main"
                small
                onClick={() => onRemove(idx)}
              >
                <i className="fas fa-minus" />
              </Button>
            </Box>
          )}
        </Box>
      ))}
      <Box display="flex">
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <StandardInput
            type="text"
            value={text}
            onChange={onChangeInput}
            onKeyPress={handleKeyPress}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="flex-center"
          alignItems="center"
          marginLeft="9px"
        >
          <Button
            onClick={() => {
              onAdd(text);
              setState({ text: '' });
            }}
            variant="secondary.main"
            icon
          >
            <i className="fas fa-plus" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
