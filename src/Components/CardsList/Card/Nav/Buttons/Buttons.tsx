import React from 'react';
// @ts-ignore
import ButtonsWrapper from './style.ts';
import { Icon, EIcons } from '../../../../Icon';

export function Buttons() {
  return (
    <ButtonsWrapper>
      <Icon name={EIcons.raiting} />
      <Icon name={EIcons.forward} />
      <Icon name={EIcons.remove} />
      <Icon name={EIcons.add} />
    </ButtonsWrapper>
  );
}
