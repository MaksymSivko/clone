import React from 'react';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { Container, Menu, MenuItem, MenuRight, UnderHeader } from './style';

export const Header = () => {
  return (
    <>
      <Container>
        <a href="/#">
          <img src="/images/logo.svg" alt="Logo" />
        </a>

        <Menu>
          <MenuItem>
            <a href="#">Model S</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Model 3</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Model X</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Model Y</a>
          </MenuItem>
        </Menu>

        <MenuRight>
          <MenuItem>
            <a href="#">Shop</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Tesla Account</a>
          </MenuItem>
          <HamburgerMenu />
        </MenuRight>
      </Container>
      <UnderHeader />
    </>
  );
};
