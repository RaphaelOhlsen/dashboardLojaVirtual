import styled, { css } from 'styled-components';

const effect = css`
  background-color: ${({ theme }) => theme.colors.grey.main.color};
  color: ${({ theme }) => theme.colors.grey.light.color};
  border: 1px solid ${({ theme }) => theme.colors.grey.light.color};
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Item = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey.main.color};
  padding: 5px 10px;
  border: 1px solid #cccc;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ${({ actualNumberPage, actual }) => actualNumberPage === actual && effect}

  &:hover {
    ${effect}
  }
`;
