import React from 'react';
// @ts-ignore
import CommentsWrapper from './style.ts';
import { Icon, EIcons } from '../../../../Icon';

export function Comments() {
  return (
    <CommentsWrapper>
      <Icon name={EIcons.comments} />
      14
    </CommentsWrapper>
  );
}