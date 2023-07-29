import React from 'react';
// @ts-ignore
import NavWrapper from './style.ts';
import {Raiting} from './Raiting';
import {Comments} from './Comments';
import {Buttons} from './Buttons';
import { PostsContext } from '../../../context/PostsContext';

// Nav.tsx

interface TSr_Details {
  icon_img: string;
}

interface NavProps {
  author: string;
  ups: number;
  srDetail: TSr_Details;
  createdUtc: number;
}

export function Nav({ author, ups, srDetail, createdUtc }: NavProps) {
  return (
    <NavWrapper>
      <Raiting ups={ups} />
      <Comments />
      <Buttons />
    </NavWrapper>
  );
}


