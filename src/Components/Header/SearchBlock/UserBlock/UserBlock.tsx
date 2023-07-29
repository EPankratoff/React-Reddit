import React from 'react';
import { Icon, EIcons } from '../../../Icon';
// @ts-ignore
import UserBLockWrapper from './style.ts';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({avatarSrc, userName}: IUserBlockProps) {
  return (
    <UserBLockWrapper>
      <a href="https://www.reddit.com/api/v1/authorize?client_id=T88d1qbUx2ODVQkv_0W0Jg&response_type=code&state=random_string&redirect_uri=http://localhost:3100/auth&duration=permanent&scope=read submit identity">
        <picture>
          {avatarSrc
            ? <img src={avatarSrc} alt="avatar user" />
            : <Icon name={EIcons.avatar} />
          }
        </picture>
        <p>
          {userName ? `${userName}` : 'Аноним'}
        </p>
      </a>
    </UserBLockWrapper>
  );
}
