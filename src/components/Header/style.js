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
export const UnderHeader = styled.div``;

export const Menu = styled.div`
  /* flex: 1; */

  @media (max-width: 768px) {
    &.activeMenu {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1001;
      background: rgba(43, 42, 42, 0.5);
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100vh;
    min-width: 320px;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: ${({ active }) => (active ? '0' : '-101%')};
    bottom: 0;
    background: #fff;
    transition: all 0.5s ease;
    z-index: 900;
    padding: 60px 10px;
  }
`;

export const MenuItem = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
