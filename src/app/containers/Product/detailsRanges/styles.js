import styled, { css } from 'styled-components';

const select = css`
  color: ${({ theme }) => theme.colors.grey.light.color};
  background-color: ${({ theme }) => theme.colors.grey.main.color};
`;

const nonSelect = css`
  color: ${({ theme }) => theme.colors.grey.main.color};
  background-color: ${({ theme }) => theme.colors.grey.light.color};
`;

export const Wrapper = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    ${select}
  }
  ${({ variacao, id }) => (variacao === id ? select : nonSelect)}
`;
