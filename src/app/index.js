import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';

import store from './store';
import { base, page } from './containers/HOC';

import { initApp } from './actions';

import Orders from './containers/Orders';
import Order from './containers/Order';
import Customers from './containers/Customers';
import Customer from './containers/Customer';
import Categories from './containers/Categories';
import Category from './containers/Category';
import Products from './containers/Products';
import Product from './containers/Product';
import Avaliations from './containers/Avaliations';
import Avaliation from './containers/Avaliation';
import Configurations from './containers/Configurations';
import Profile from './containers/Profile';

import Teste from './containers/Teste';

import Login from './containers/Login';
import RecoverPassword from './containers/RecoverPassord';
import ResetPassword from './containers/RecoverPassord/ResetPassword';

function App() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={base(Orders)} />
          <Route path="/pedido/:id" component={base(Order)} />

          <Route path="/clientes" component={base(Customers)} />
          <Route path="/cliente/:email" component={base(Customer)} />

          <Route path="/categorias" component={base(Categories)} />
          <Route path="/categoria/:id" component={base(Category)} />

          <Route path="/produtos" component={base(Products)} />
          <Route path="/produto/:id" component={base(Product)} />

          <Route path="/avaliacoes/:id" component={base(Avaliations)} />
          <Route path="/avaliacao/:id" component={base(Avaliation)} />

          <Route path="/configuracoes/" component={base(Configurations)} />

          <Route path="/perfil/" component={base(Profile)} />

          <Route path="/teste" component={base(Teste)} />

          <Route path="/login" component={page(Login)} />
          <Route path="/recuperar-senha" component={page(RecoverPassword)} />
          <Route path="/resetar-senha/:token" component={page(ResetPassword)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
