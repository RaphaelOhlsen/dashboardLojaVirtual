import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const H2 = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const H3 = styled.h3`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const H4 = styled.h4`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export default function Titulo({ tipo, children, ...props }) {
  switch (tipo) {
    case 'h4':
      return <H4 {...props}>{children}</H4>;
    case 'h3':
      return <H3 {...props}>{children}</H3>;
    case 'h2':
      return <H2 {...props}>{children}</H2>;
    case 'h1':
    default:
      return <H1 {...props}>{children}</H1>;
  }
}
