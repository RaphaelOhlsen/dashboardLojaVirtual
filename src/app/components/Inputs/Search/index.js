/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Search({ value, onChange, placeholder, onClick }) {
  return (
    <div className="Pesquisa flex horizontal">
      <input value={value} onChange={onChange} placeholder={placeholder} />
      <button type="button">
        <i className="fas fa-search" onClick={onClick} />
      </button>
    </div>
  );
}
