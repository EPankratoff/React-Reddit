import React, { ChangeEvent, FormEvent } from 'react';
import CommentFormWrapper from './style';

interface ICommentFormProps {
  button: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  isOpened?: boolean;
  author?: string;
}

export function CommentForm({button, value, onChange, onSubmit, isOpened = true, author = ''}: ICommentFormProps) {
  const textarea = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (isOpened) {
      textarea.current?.focus()
    }
  }, [isOpened])
  
  return (
    <>
      {isOpened && 
        <CommentFormWrapper onSubmit={onSubmit}>
          <textarea ref={textarea} value={value === '' ? author : value} onChange={onChange}></textarea>
          <div></div>
          <button type="submit">{button}</button>
        </CommentFormWrapper>
      }
    </>
  );
}
