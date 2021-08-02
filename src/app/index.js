import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import base from './containers/HOC';

import Pedidos from './containers/Pedidos';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={base(Pedidos)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
