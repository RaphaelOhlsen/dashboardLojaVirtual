import styled from 'styled-components';

export const Card = styled.div`
  margin: 40px 40px;
  margin: ${({ margin }) => margin || '40px 40px'};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  flex: ${({ flex }) => flex};
  padding: 30px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 5px #7777;
  background-color: ${({ theme }) => theme.colors.white.main.color};
`;
