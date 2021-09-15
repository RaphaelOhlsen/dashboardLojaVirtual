import styled from 'styled-components';

export const Wrapper = styled.div`
  /* margin: 30px 0; */
  table {
    border-collapse: collapse;
  }

  th {
    background-color: ${({ theme }) => theme.colors.standard.main.color};
    padding: 10px;
    color: ${({ theme }) => theme.colors.white.main.color};
    font-size: 1rem;
  }

  th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  td {
    padding: 10px;
    font-size: 0.9rem;
    border-bottom: 1px solid #999;
  }
`;
