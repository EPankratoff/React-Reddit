import React from 'react';
// @ts-ignore
import CardWrapper from './style.ts';
import {Tooltip} from './Tooltip'
import {UserHeader} from './UserHeader'
import {NewsTitle} from './NewsTitle';
import {Picture} from './Ricture';
import {Nav} from './Nav';
import { Dropdown } from './Dropdown';
import { Button } from './Tooltip/Button';
import { nanoid } from 'nanoid';
import {isMobile} from 'react-device-detect';
import { Icon, EIcons } from '../../Icon';
import { PostsContext } from '../../context/PostsContext';

const ButtonTooltipList = [
  {text: 'Комментарии', onClick: () =>  console.log('Комментарии'), image: <Icon name={EIcons.comments} />, isMobile: !isMobile},
  {text: 'Поделиться', onClick: () =>  console.log('Поделиться'), image: <Icon name={EIcons.forwardDv} />, isMobile: !isMobile},
  {text: 'Скрыть', onClick: () =>  console.log('Скрыть'), image: <Icon name={EIcons.hideDv} />, isMobile: true},
  {text: 'Сохранить', onClick: () =>  console.log('Сохранить'), image: <Icon name={EIcons.saveDv} />, isMobile: !isMobile},
  {text: 'Пожаловаться', onClick: () =>  console.log('Пожаловаться'), image: <Icon name={EIcons.claim} />, isMobile: true},
];

export function Card() {
  return (
    <CardWrapper>
      <UserHeader />
      <NewsTitle />
      <Picture />
      <Dropdown target={<Tooltip />}>
        {ButtonTooltipList.map(({text, onClick, image, isMobile}) => (
          <Button image={image} isMobile={isMobile} text={text} onClick={onClick} key={nanoid()} />
        ))}
      </Dropdown>
      <Nav />
    </CardWrapper>
  );
}
