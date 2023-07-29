import React from 'react';
import { CommentsWrapper, CommentsButton, CommentsFooter, CommentsText, CommentsHeader } from './style';
import { IComment, useGetComments } from '../../../hooks/useGetComments'; // Используем интерфейс IGetComments и хук useGetComments
import { nanoid } from 'nanoid';
import { declensionNumerals } from '../../../utils/declensionNumerals';
import { Icon, EIcons } from '../../Icon';
import { CommentFormContainer } from '../CommentFormContainer';
import { PostsContext } from '../../context/PostsContext';

export function Comments() {
  const { id } = React.useContext(PostsContext);

  const [comments] = useGetComments(id); // Используем хук useGetComments для получения комментариев

  const [isCommentFormReplayOpen, setCommentFormReplayOpen] = React.useState(false);

  const handleFormOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    setCommentFormReplayOpen(true);
  }

  return (
    <>
      {
        comments && comments.map((comment: IComment)  => {
          const { author, text, time } = comment;

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
                  <CommentsButton onClick={(e) => handleFormOpen(e)}>
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

                <CommentFormContainer author={author + ','} isOpened={isCommentFormReplayOpen} button={'Ответить'} />
              </div>
            </CommentsWrapper>
          );
        })
      }
    </>
  );
}