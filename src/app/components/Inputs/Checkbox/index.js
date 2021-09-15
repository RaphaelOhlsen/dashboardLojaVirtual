import React from 'react';
import styled from 'styled-components';

const size = 1.3;

const Wrapper = styled.div`
  & input {
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(${size});
    margin-right: 3px;
  }
`;

export default function Checkbox({ label, value, onChange }) {
  return (
    <Wrapper display="flex" alignItems="center">
      <input type="checkbox" checked={value} onChange={onChange} />
      <span>&nbsp;{label}</span>
    </Wrapper>
  );
}
