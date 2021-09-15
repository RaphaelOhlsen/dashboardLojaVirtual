import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const Link = styled(_Link)`
  color: ${({ theme }) => theme.colors.grey.medium.color};
  transition: ${({ theme }) => theme.transition};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

export default Link;
