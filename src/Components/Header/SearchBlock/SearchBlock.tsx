import React from 'react';
// @ts-ignore
import SearchBlockWrapper from './style.ts';
import {UserBlock} from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const [data] = useUserData();

  return (
    <SearchBlockWrapper>
      <UserBlock avatarSrc={data.iconImg} userName={data.name} />
    </SearchBlockWrapper>
  );
}
