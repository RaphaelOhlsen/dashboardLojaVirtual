import styled, { css } from 'styled-components';

export const TopItem = styled.div`
  display: flex;
  align-items: center;
  ${({ open }) =>
    open
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

export const Wrapper = styled.div`
  ${({ open }) =>
    open
      ? css`
          color: red;
        `
      : css`
          color: yellow;
        `}
`;
