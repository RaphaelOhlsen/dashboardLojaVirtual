import styled, { css } from 'styled-components';

export const Item = styled.div`
  display: flex;
  ${({ activeLocal, route }) =>
    activeLocal === route &&
    css`
      color: red;
    `}
`;
