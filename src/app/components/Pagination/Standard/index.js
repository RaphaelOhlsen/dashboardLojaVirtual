/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Wrapper, Item } from './styles';

export default function Standard({ actual, total, limit, onClick }) {
  const numberPages = Math.ceil(total / limit);
  return (
    <Wrapper>
      {[...Array(numberPages).keys()].map((number, idx) => {
        const actualNumberPage = number * limit;
        return (
          <Item
            actualNumberPage={actualNumberPage}
            actual={actual}
            onClick={() => onClick(actualNumberPage)}
            key={`pag-${idx}`}
          >
            {number + 1}
          </Item>
        );
      })}
    </Wrapper>
  );
}
