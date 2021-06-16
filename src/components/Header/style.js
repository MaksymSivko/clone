import styled from 'styled-components/macro';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const UnderHeader = styled.div`
  /* height: 60px; */
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  white-space: nowrap;
`;
