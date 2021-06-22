import styled from 'styled-components/macro';

export const Container = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: none;
  position: relative;
  z-index: 1100;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 5px;
    background: #000;
    transition: all 0.5s ease;
  }

  &::after {
    transform: translateY(6px);
  }

  &::before {
    transform: translateY(-6px);
    box-shadow: 0 6px 0 #000;
  }

  &.active::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 0 #000;
  }

  &.active::after {
    transform: translateY(0) rotate(-45deg);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
