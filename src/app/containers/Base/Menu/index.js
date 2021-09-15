import React, { useState } from 'react';
import ListItems from '../ListItems';

import { TopItem, Wrapper } from './styles';

export default function Menu({ history }) {
  const [open, setOpen] = useState(true);

  function toogleOpen() {
    setOpen(!open);
  }

  return (
    <Wrapper open={open}>
      <TopItem open={open} onClick={() => toogleOpen()}>
        <i className={`fas fa-arrow-${open ? 'left' : 'right'}`} />
      </TopItem>
      <hr />
      <ListItems open={open} history={history} />
    </Wrapper>
  );
}
