/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line no-unused-vars
class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex horizontal">
        <div className="flex vertical">
          <p>Menu</p>
        </div>
        <div className="flex vertical">
          <div className="flex horizontal">Barra Topo</div>
          <div className="flex">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
