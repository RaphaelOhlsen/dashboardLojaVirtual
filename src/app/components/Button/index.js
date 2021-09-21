/* eslint-disable react/button-has-type */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: ${({ padding }) => padding || '10px 15px'};
  font-size: 1rem;
  font-weight: 700;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: 5px;
  margin: ${({ margin }) => margin};

  ${({ small }) =>
    small &&
    css`
      font-size: 0.8rem;
      padding: 5px 12px;
      margin: 3px;
      border-radius: 5px;
    `}

  ${({ icon }) =>
    icon &&
    css`
      padding: 5px 12px;
    `}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &:hover, &:focus {
    ${({ icon }) =>
      !icon &&
      css`
        opacity: 0.5;
      `}
    color: ${({ hover }) => hover}
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

const Button = ({ href, children, name, goback, ...props }) => {
  if (goback && href) {
    return <Link to={href}>{'< Voltar'}</Link>;
  }
  if (href) {
    return (
      <Link to={href}>
        <ButtonWrapper {...props}>{children}</ButtonWrapper>
      </Link>
    );
  }

  return (
    <Link to={href}>
      <ButtonWrapper {...props}>{children}</ButtonWrapper>
    </Link>
  );
};

export default Button;
