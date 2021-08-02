import React from 'react';

export default function Titulo({ tipo, titulo }) {
  switch (tipo) {
    case 'h1':
    default:
      return <h1 className="Titulo">{titulo}</h1>;
  }
}
