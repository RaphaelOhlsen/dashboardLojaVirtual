import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.standard.main.color};
  color: ${({ theme }) => theme.colors.white.main.color};
  box-shadow: 0 0 8px 0px #111;
  z-index: 10;
  ${({ open }) =>
    open
      ? css`
          width: 180px;
        `
      : css`
          width: 50px;
        `}
`;

export const TopItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  ${({ open }) =>
    open
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: center;
        `}
`;
