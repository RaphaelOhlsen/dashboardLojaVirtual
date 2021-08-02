import React from 'react';
import Base from '../Base';

const base = (Component) => (props) =>
  (
    <Base history={props.history}>
      <Component {...props} />
    </Base>
  );

export default base;
