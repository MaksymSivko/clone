import React, { useState } from 'react';
import { Container } from './style';

export const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return <Container onClick={clickMenu} className={openMenu ? 'active' : ''} />;
};
