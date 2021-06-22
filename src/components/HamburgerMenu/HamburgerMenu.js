import React, { useEffect, useState } from 'react';
import { Container } from './style';

export const HamburgerMenu = ({ menu, menuOptions }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const clickMenu = () => {
    setBurgerStatus(!burgerStatus);
    menu(!burgerStatus);
    document.body.classList.toggle('hidden');
  };

  useEffect(() => {
    setBurgerStatus(menuOptions);
  }, [menuOptions]);

  return (
    <Container onClick={clickMenu} className={burgerStatus ? 'active' : ''} />
  );
};
