// import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
// import styles from './commentForm.css';
// import { commentContext } from '../../context/commentContext';

// export function CommentForm() {

//     const {value, onChange} = useContext(commentContext)


//     function handleChande(event: ChangeEvent<HTMLTextAreaElement>)  {
//         onChange(event.target.value);
//     }


//     function handleSubmit(event:FormEvent) {
//         event.preventDefault();
//         console.log(value);
//     }

//     return (
//         <form className={styles.form} onSubmit={handleSubmit}>
//             <textarea className={styles.input} value={value} onChange={handleChande} />
//             <button type='submit' className={styles.button}>Комментировать</button>

//         </form>
//     )
// }


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
