import React from 'react';
import Fade from 'react-reveal';
import {
  ItemText,
  Wrap,
  ButtonGroup,
  RightButton,
  LeftButton,
  DownArrow,
  Buttons,
} from './style';

export const Section = ({
  title,
  description,
  backgroundImg,
  leftBtn,
  rightBtn,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <ItemText>
        <Fade left>
          <h1>{title}</h1>
        </Fade>
        <Fade right>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            {leftBtn && <LeftButton>{leftBtn}</LeftButton>}
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
};
