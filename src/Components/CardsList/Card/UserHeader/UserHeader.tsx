import React from 'react';
// @ts-ignore
import CardUserHeader from './style.ts';
import { declensionNumerals } from '../../../../utils/declensionNumerals';
import { PostsContext } from '../../../context/PostsContext';

export function UserHeader() {
  const {author, sr_detail, created_utc} = React.useContext(PostsContext);
  const postDate = new Date(created_utc);
  const dateString = postDate.getHours();
  const word = declensionNumerals(dateString, ['час', 'часа', 'часов']);

  return (
    <CardUserHeader>
      <img src={sr_detail as unknown as string} alt="" />
      <p>{author}</p>
      <p><span>опубликовано</span> {dateString} {word} назад</p>
    </CardUserHeader>
  );
}
