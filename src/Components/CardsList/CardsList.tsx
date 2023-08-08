import React, { useContext } from 'react';
// @ts-ignore
import CardsListWrapper from './style.ts';
import { Card } from './Card';
import { usePostsData } from '../../hooks/usePostsData';
import { PostsContext  } from '../context/PostsContext';
import { nanoid } from 'nanoid';

export function CardsList() {
  const [ListPostData] = usePostsData();

  return (
    <CardsListWrapper>
      {ListPostData.map(({id, title, preview, author, ups, sr_detail, created_utc}) => {
        const data = {id, title, preview, author, ups, sr_detail, created_utc};
        return <PostsContext.Provider value={data} key={nanoid()}><Card /></PostsContext.Provider>
      })}
    </CardsListWrapper>
  )
}
