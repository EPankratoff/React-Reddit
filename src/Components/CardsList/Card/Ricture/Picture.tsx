import React from 'react';
import { PostsContext } from '../../../context/PostsContext';
// @ts-ignore
import PictureWrapper from './style.ts';

export function Picture() {
  const {preview} = React.useContext(PostsContext);
  
  return (
    <PictureWrapper>
      <img src={(preview as string)} alt="" />
    </PictureWrapper>
  );
}
