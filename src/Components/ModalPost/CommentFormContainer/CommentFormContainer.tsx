import React, { ChangeEvent, FormEvent } from 'react';
import { updateComment } from '../../../store/actions';
import { IState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { CommentForm } from './CommentForm/CommentForm';

interface ICommentFormContainerProps {
  button: string;
  isOpened?: boolean;
  author?: string;
}

export function CommentFormContainer({
  isOpened,
  button,
  author,
}: ICommentFormContainerProps) {
  const value = useSelector<IState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  // Проверка на isOpened перед отрисовкой CommentForm
  if (isOpened) {
    return null;
  }

  return (
    <CommentForm
      author={author}
      button={button}
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
