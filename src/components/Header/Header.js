import React, { useRef, useState } from 'react';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { Container, Menu, MenuItem, MenuWrapper } from './style';
import { selectCars } from './../../features/car/carSlice';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  const cars = useSelector(selectCars);
  console.log(cars);
  const closeMenu = (e) => {
    if (menuRef.current === e.target) {
      setOpenMenu(false);
    }
  };

  return (
    <Container>
      <a href="/#">
        <img src="/images/logo.svg" alt="Logo" />
      </a>

      <Menu
        onClick={closeMenu}
        ref={menuRef}
        className={openMenu ? 'activeMenu' : ''}
      >
        <MenuWrapper active={openMenu}>
          {cars &&
            cars.map((value) => (
              <MenuItem key={`key-${value}`}>
                <a href={`/${value}`}>{value}</a>
              </MenuItem>
            ))}
        </MenuWrapper>
      </Menu>

      <HamburgerMenu menu={setOpenMenu} menuOptions={openMenu} />
    </Container>
  );
};
