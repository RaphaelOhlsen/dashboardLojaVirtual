import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const WrapperLink = styled(_Link)`
  color: ${({ theme }) => theme.colors.grey.medium.color};
  transition: ${({ theme }) => theme.transition};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

const WrapperAnchor = styled.a`
  color: ${({ theme }) => theme.colors.grey.medium.color};
  transition: ${({ theme }) => theme.transition};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

export default function Link({ external, to, ...props }) {
  if (external) {
    return <WrapperAnchor href={to} {...props} />;
  }
  return <WrapperLink {...props} />;
}
