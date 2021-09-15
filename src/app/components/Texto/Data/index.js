import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  ${({ column }) =>
    !column
      ? css`
          align-items: center;
        `
      : css`
          flex-direction: column;
        `}
`;

const WrapperDataKey = styled.strong`
  display: flex;

  ${({ column }) =>
    !column
      ? css`
          margin-right: 10px;
        `
      : css`
          margin-bottom: 5px;
        `}
`;

export function DataText({ dataKey, value, ...props }) {
  return (
    <Wrapper {...props}>
      <WrapperDataKey {...props}>{dataKey}:</WrapperDataKey>
      <span>{value}</span>
    </Wrapper>
  );
}
