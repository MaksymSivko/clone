import React, { useRef, useState } from 'react';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { Container, Menu, MenuItem, UnderHeader, MenuWrapper } from './style';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  const closeMenu = (e) => {
    if (menuRef.current === e.target) {
      setOpenMenu(false);
    }
  };

  return (
    <>
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
            <MenuItem>
              <a href="/a">Model S</a>
            </MenuItem>
            <MenuItem>
              <a href="/#">Model 3</a>
            </MenuItem>
            <MenuItem>
              <a href="/#">Model X</a>
            </MenuItem>
            <MenuItem>
              <a href="/#">Model Y</a>
            </MenuItem>
            <MenuItem>
              <a href="/#">Shop</a>
            </MenuItem>
            <MenuItem>
              <a href="/#">Tesla Account</a>
            </MenuItem>
          </MenuWrapper>
        </Menu>

        <HamburgerMenu menu={setOpenMenu} menuOptions={openMenu} />
      </Container>
      <UnderHeader />
    </>
  );
};
