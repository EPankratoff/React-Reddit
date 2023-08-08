import React from 'react';
// @ts-ignore
import NavWrapper from './style.ts';
import {Raiting} from './Raiting';
import {Comments} from './Comments';
import {Buttons} from './Buttons';
import { PostsContext } from '../../../context/PostsContext';

export function Nav() {
  const {ups} = React.useContext(PostsContext);

  return (
    <NavWrapper>
      <Raiting ups={ups} />
      <Comments />
      <Buttons />
    </NavWrapper>
  );
}
