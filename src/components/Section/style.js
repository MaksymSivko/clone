import styled from 'styled-components/macro';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.backgroundImg}) no-repeat center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  width: 260px;
  height: 40px;
  background: rgba(23, 26, 32, 0.8);
  color: #fff;
  white-space: nowrap;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

export const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.6;
  color: #000;
`;

export const DownArrow = styled.img`
  margin: 20px 0;
  height: 40px;
  overflow-x: hidden;
  animation: animDown 1.5s infinite;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
