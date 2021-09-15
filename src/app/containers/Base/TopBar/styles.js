import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.black.main.color};
  a,
  p {
    color: ${({ theme }) => theme.colors.white.main.color};
    font-size: 1rem;
  }
`;
