/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Standard({ actual, total, limit, onClick }) {
  const numberPages = Math.ceil(total / limit);
  return (
    <div className="Paginacao flex horizontal">
      {[...Array(numberPages).keys()].map((number, idx) => {
        const actualNumberPage = number * limit;
        return (
          <div
            className={`paginacao-item ${
              actualNumberPage === actual ? 'paginacao-item-active' : ''
            }`}
            onClick={() => onClick(actualNumberPage)}
            key={`pag-${idx}`}
          >
            {number + 1}
          </div>
        );
      })}
    </div>
  );
}
