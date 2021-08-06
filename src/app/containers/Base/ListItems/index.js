/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../../components/foundation/layout/Box';
import { Item } from './styles';

const items = [
  {
    id: 1,
    route: '/',
    icon: <i className="fas fa-copy" />,
    title: 'Pedidos',
  },
  {
    id: 2,
    route: '/clientes',
    icon: <i className="fas fa-users" />,
    title: 'Clientes',
  },
  {
    id: 3,
    route: '/categorias',
    icon: <i className="fas fa-clone" />,
    title: 'Categorias',
  },
  {
    id: 4,
    route: '/produtos',
    icon: <i className="fas fa-boxes" />,
    title: 'Produtos',
  },
  {
    id: 5,
    route: '/configuracoes',
    icon: <i className="fas fa-cog" />,
    title: 'Configurações',
  },
  {
    id: 6,
    route: '/Perfil',
    icon: <i className="fas fa-user" />,
    title: 'Perfil',
  },
];

export default function ListItems({ open, history }) {
  const activeLocal = history.location.pathname;
  console.log(activeLocal);
  return (
    <div className="items-wrapper">
      {items.map((item) => (
        <Link to={item.route} key={`link-${item.id}`}>
          <Item
            route={item.route}
            activeLocal={activeLocal}
            className="menu-item"
          >
            <Box
              display="flex"
              flex="1"
              justifyContent="center"
              alignItens="center"
            >
              {item.icon}
            </Box>
            {open && (
              <Box
                display="flex"
                flex="2"
                justifyContent="flex-start"
                alignItems="center"
              >
                <span>{item.title}</span>
              </Box>
            )}
          </Item>
        </Link>
      ))}
    </div>
  );
}
