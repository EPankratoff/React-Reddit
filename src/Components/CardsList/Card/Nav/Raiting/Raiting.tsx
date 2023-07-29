import React from 'react';
// @ts-ignore
import RatingWrapper from './style.ts';
import { Icon, EIcons } from '../../../../Icon';

interface IRatingProps {
  ups: number
}

export function Raiting({ups}: IRatingProps) {
  return (
    <RatingWrapper>
      <div data-rotate="up">
        <Icon name={EIcons.arrow} />
      </div>
      <p>{ups}</p>
      <div data-rotate="down">
        <Icon name={EIcons.arrow} />
      </div>
    </RatingWrapper>
  );
}
