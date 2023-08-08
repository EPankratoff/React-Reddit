import React, { useContext } from 'react';
// @ts-ignore
import HeaderWrapper from './style.ts';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

export function Header() {
  return (
    <HeaderWrapper>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </HeaderWrapper>
  );
}
