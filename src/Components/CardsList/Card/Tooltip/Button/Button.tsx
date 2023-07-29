import React from 'react';
// @ts-ignore
import ButtonWrapper from './style.ts';

interface IButtonProps {
  text: string;
  onClick: Function;
  image: React.ReactNode;
  isMobile: Boolean;
}

export function Button({text, onClick, image, isMobile}: IButtonProps) {
  return (
    <>
      {isMobile && (
        <ButtonWrapper onClick={() => onClick()}>
          {image}
          {text}
        </ButtonWrapper>
      )}
    </>
  );
}