import React from 'react';
import { PostsContext } from '../../../context/PostsContext';
// @ts-ignore
import NewsTitleWrapper from './style.ts';
import { ModalPost } from '../../../ModalPost';

export function NewsTitle() {
  const {title} = React.useContext(PostsContext);
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  return (
    <NewsTitleWrapper onClick={() => setIsModalOpened(true)}>
      {title}
      {isModalOpened && (
        <ModalPost onClose={() => setIsModalOpened(false)} />
      )}
    </NewsTitleWrapper>
  );
}
