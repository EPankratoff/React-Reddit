import React from 'react';
import { IPostsData } from '../../hooks/usePostsData';

export const PostsContext =  React.createContext<IPostsData>({
  id: '', 
  title: '',
  preview: {
    images: ''
  },
  author: '',
  ups: 0,
  sr_detail: {
    icon_img: ''
  },
  created_utc: 0,
});
