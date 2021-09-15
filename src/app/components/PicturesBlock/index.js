/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { Box } from '../foundation/layout/Box';
import Titulo from '../Texto/Titulo';

const WrapperPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 5px;
  background-size: cover;
  flex: 1;
  flex-basis: 100px;
  background-image: url(${({ backgroundImage }) => `"${backgroundImage}"`});
`;

const WrapperRemove = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white.main.color};
  background-color: ${({ theme }) => theme.colors.tertiary.main.color};
  border-radius: 50%;
  &:hover {
    background-color: #a10b0b;
  }
  & spam {
    font-size: 1.5rem;
  }
`;

export default function PicturesBlock({ handleSubmit, pictures, onRemove }) {
  return (
    <div>
      <Box marginBottom="10px">
        <Titulo tipo="h3">Imagens</Titulo>
        <Box display="flex" flexDirection="column" marginTop="10px">
          <label>
            <strong>Insira aqui uma nova imagem:&nbsp;</strong>
          </label>
          <input type="file" onChange={handleSubmit} />
        </Box>
      </Box>
      <hr />
      <Box display="flex" flexWrap="wrap" marginTop="10px">
        {pictures.map((src, idx) => (
          <WrapperPicture key={`picture-${idx}`} backgroundImage={src}>
            <WrapperRemove onClick={() => onRemove(idx)}>
              <spam> - </spam>
            </WrapperRemove>
          </WrapperPicture>
        ))}
      </Box>
    </div>
  );
}
