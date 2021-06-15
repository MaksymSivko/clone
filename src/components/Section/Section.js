import React from 'react';
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
  // const [title, description, backgroundImg, leftBtn, rightBtn] = props;

  return (
    <Wrap backgroundImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtn}</LeftButton>
          <RightButton>{rightBtn}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
