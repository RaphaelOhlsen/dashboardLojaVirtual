import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & select {
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.grey.medium};
    padding: 5px;
  }
`;

export default function Select({ value, onChange, options, name }) {
  return (
    <Wrapper>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, idx) => (
          <option key={`option-${idx}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
