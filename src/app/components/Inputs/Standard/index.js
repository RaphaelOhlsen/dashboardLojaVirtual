import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  & label {
    font-weight: 700;

    ${({ direction }) =>
      direction === 'row' &&
      css`
        margin-right: 10px;
      `};
  }

  ${({ direction }) =>
    direction === 'row' &&
    css`
      align-items: center;
    `};

  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};

  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  & input {
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.grey.medium.color};
    font-size: 0.95rem;
  }
`;
export default function Standard({
  type,
  label,
  value,
  onChange,
  onKeyPress,
  error,
  ...props
}) {
  return (
    <Wrapper {...props}>
      {label && <label htmlFor="input">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        id="input"
      />
    </Wrapper>
  );
}
