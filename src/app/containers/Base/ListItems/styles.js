import styled, { css } from 'styled-components';

export const Item = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white.main.color};
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.standard.light.color};
  }
  ${({ activeLocal, route }) =>
    activeLocal === route &&
    css`
      background-color: ${({ theme }) => theme.colors.standard.light.color};
    `}
  i {
    font-size: 1.3rem;
  }
`;
