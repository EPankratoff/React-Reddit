import React, { ChangeEvent, FormEvent } from 'react';
import {updateComment} from '../../../store/actions';
import { IState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { CommentForm } from './CommentForm/CommentForm';

interface ICommentFormProps {
  button: string;
  isOpened?: boolean;
  author?: string;
}

export function CommentFormContainer({isOpened, button, author}: ICommentFormProps) {
  const value = useSelector<IState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value)
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value))
  }
  
  return (
    <CommentForm author={author} isOpened={isOpened} button={button} value={value} onChange={handleChange} onSubmit={handleSubmit} />
  );
}
