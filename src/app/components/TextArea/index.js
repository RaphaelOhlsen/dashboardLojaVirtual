import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  textarea {
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.grey.medium};
    resize: ${({ noResize }) => noResize && 'none'};
    font-size: 0.95rem;
    width: ${({ width }) => width};
  }
`;

export default function TextArea({
  name,
  value,
  handleSubmit,
  rows,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <textarea
        name={name}
        value={value}
        handleSubmit={handleSubmit}
        rows={rows}
      />
    </Wrapper>
  );
}
