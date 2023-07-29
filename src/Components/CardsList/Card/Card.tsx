// import React from 'react';
// // @ts-ignore
// import CardWrapper from './style.ts';
// import {Tooltip} from './Tooltip'
// import {UserHeader} from './UserHeader'
// import {NewsTitle} from './NewsTitle';
// import {Picture} from './Ricture';
// import {Nav} from './Nav';
// import { Dropdown } from './Dropdown';
// import { Button } from './Tooltip/Button';
// import { nanoid } from 'nanoid';
// import {isMobile} from 'react-device-detect';
// import { Icon } from '../../Icon';

// const ButtonTooltipList = [
//   {text: 'Комментарии', onClick: () =>  console.log('Комментарии'), image: <Icon name={'CommentsIcon'} width={15} height={15} />, isMobile: !isMobile},
//   {text: 'Поделиться', onClick: () =>  console.log('Поделиться'), image: <Icon name={'ForwardDvIcon'} width={12} height={14} />, isMobile: !isMobile},
//   {text: 'Скрыть', onClick: () =>  console.log('Скрыть'), image: <Icon name={'HideDvIcon'} width={14} height={14} />, isMobile: true},
//   {text: 'Сохранить', onClick: () =>  console.log('Сохранить'), image: <Icon name={'SaveDvIcon'} width={14} height={14} />, isMobile: !isMobile},
//   {text: 'Пожаловаться', onClick: () =>  console.log('Пожаловаться'), image: <Icon name={'ClaimDvIcon'} width={16} height={14} />, isMobile: true},
// ];

// export function Card() {
//   return (
//     <CardWrapper>
//       <UserHeader />
//       <NewsTitle />
//       <Picture />
//       <Dropdown target={<Tooltip />}>
//         {ButtonTooltipList.map(({text, onClick, image, isMobile}) => (
//           <Button image={image} isMobile={isMobile} text={text} onClick={onClick} key={nanoid()} />
//         ))}
//       </Dropdown>
//       <Nav />
//     </CardWrapper>
//   );
// }

// export function Card() {
//   return (
//     <CardWrapper>
//       <UserHeader />
//       <NewsTitle />
//       <Picture />
//       <Dropdown target={<Tooltip />}>
//         {ButtonTooltipList.map(({text, onClick, image, isMobile}) => (
//           <Button image={image} isMobile={isMobile} text={text} onClick={onClick} key={nanoid()} />
//         ))}
//       </Dropdown>
//       <Nav />
//     </CardWrapper>
//   );
// }


import React from 'react';
// @ts-ignore
import CardWrapper from './style.ts';
import { Tooltip } from './Tooltip'
import { UserHeader } from './UserHeader'
import { NewsTitle } from './NewsTitle';
import { Picture } from './Ricture';
import { Nav } from './Nav';
import { Dropdown } from './Dropdown';
import { Button } from './Tooltip/Button';
import { nanoid } from 'nanoid';
import { isMobile } from 'react-device-detect';
import { Icon, EIcons } from '../../Icon';

const ButtonTooltipList = [
  { text: 'Комментарии', onClick: () => console.log('Комментарии'), image: <Icon name={EIcons.comments} />, isMobile: !isMobile },
  { text: 'Поделиться', onClick: () => console.log('Поделиться'), image: <Icon name={EIcons.forwardDv} />, isMobile: !isMobile },
  { text: 'Скрыть', onClick: () => console.log('Скрыть'), image: <Icon name={EIcons.hideDv} />, isMobile: true },
  { text: 'Сохранить', onClick: () => console.log('Сохранить'), image: <Icon name={EIcons.saveDv} />, isMobile: !isMobile },
  { text: 'Пожаловаться', onClick: () => console.log('Пожаловаться'), image: <Icon name={EIcons.claim} />, isMobile: true },
];



import { IPostsData } from '../../../hooks/usePostsData';

interface CardProps {
  postData: IPostsData;
}

export function Card({ postData }: CardProps) {
  const { id, title, author, ups, sr_detail, created_utc, preview } = postData;

  return (
    <CardWrapper>
      <UserHeader author={author} created_utc={created_utc} avatarUrl={sr_detail.icon_img} />
      <NewsTitle title={title} />
      <Picture imageUrl={preview?.images?.[0]?.source?.url.replace(/(\&amp\;)/g, "&") || 'https://b.thumbs.redditmedia.com/WFgeymV_hst-gtDexMkHnD8o3LmUSY96L2GZjc-K1bc.png'} />
      <Dropdown target={<Tooltip />}>
        {ButtonTooltipList.map(({ text, onClick, image, isMobile }) => (
          <Button image={image} isMobile={isMobile} text={text} onClick={onClick} key={nanoid()} />
        ))}
      </Dropdown>
      <Nav
        author={author} // Передаем имя автора в компонент Nav через проп author
        ups={ups} // Передаем количество upvotes в компонент Nav через проп ups
        srDetail={sr_detail} // Передаем информацию о subreddit в компонент Nav через проп srDetail
        createdUtc={created_utc} // Передаем время создания поста в компонент Nav через проп createdUtc
      />
    </CardWrapper>
  );
}




