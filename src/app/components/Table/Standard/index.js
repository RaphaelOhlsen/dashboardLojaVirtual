import React from 'react';
import { Link } from 'react-router-dom';

export default function Standard({ header, data }) {
  console.log(data);
  return (
    <div className="Tabela Simples">
      <table className="simples">
        <thead>
          <tr>
            {header.map((item, idx) => (
              <th key={`th-${idx}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((line, idx) => (
            <tr key={`tr-${idx}`}>
              {header.map((item, index) => (
                <td key={`td-${index}`}>{line[item] || 'teste'}</td>
              ))}
              {line.botaoDetalhes && (
                <td>
                  <Link to={line.botaoDetalhes}>
                    <button type="button">DETALHES</button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
