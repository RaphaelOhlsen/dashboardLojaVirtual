import React from 'react';
import { Wrapper } from './styles';
import Button from '../../Button';

export default function Standard({ header, data }) {
  return (
    <Wrapper>
      <table>
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
                <td key={`td-${index}`}>{line[item]}</td>
              ))}
              {line.botaoDetalhes && (
                <td>
                  <Button
                    variant="tertiary.main"
                    href={line.botaoDetalhes}
                    small
                  >
                    Detalhes
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}
