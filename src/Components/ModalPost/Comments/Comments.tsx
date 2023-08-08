import React from 'react';
import { CommentsWrapper, CommentsButton, CommentsFooter, CommentsText, CommentsHeader } from './style';
import { PostsContext } from '../../context/PostsContext';
import { IGetComments, useGetComments } from '../../../hooks/useGetComments';
import { nanoid } from 'nanoid';
import { declensionNumerals } from '../../../utils/declensionNumerals';
import { Icon, EIcons } from '../../Icon';
import { CommentFormContainer } from '../CommentFormContainer';

export function Comments() {
  const { id } = React.useContext(PostsContext);

  const [comments] = useGetComments(id);
  const [activeReplyIndex, setActiveReplyIndex] = React.useState<number | null>(null);

  const handleFormOpen = (index: number) => {
    setActiveReplyIndex(activeReplyIndex === index ? null : index); // Toggle the active index
  };

  return (
    <>
      {comments.map((ar: IGetComments, index: number) => {
        const { author, text, time } = ar;

        const commentDate = new Date(time);
        const dateString = commentDate.getHours();
        const word = declensionNumerals(dateString, ['час', 'часа', 'часов']);

        return (
          <CommentsWrapper key={nanoid()}>
            <Icon name={EIcons.arrows} />
            <div>
              <CommentsHeader>
                <span>{author}</span> {dateString} {word} назад
              </CommentsHeader>
              <CommentsText>{text}</CommentsText>
              <CommentsFooter>
                <CommentsButton onClick={(e) => {
                  e.stopPropagation(); // Остановить всплытие события
                  handleFormOpen(index); // Открывать/закрывать форму ответа
                }}>
                  <Icon name={EIcons.comments} />
                  Ответить
                </CommentsButton>
                <CommentsButton>
                  <Icon name={EIcons.forwardDv} />
                  Поделиться
                </CommentsButton>
                <CommentsButton>
                  <Icon name={EIcons.complaint} />
                  Пожаловаться
                </CommentsButton>
              </CommentsFooter>

              {index === 100 || activeReplyIndex === index ? (
                <CommentFormContainer
                  author={author + ','}
                  button={'Ответить'}
                />
              ) : null}
            </div>
          </CommentsWrapper>
        );
      })}
    </>
  );
}
