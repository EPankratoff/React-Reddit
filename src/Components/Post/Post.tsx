// import React, { useEffect, useRef } from 'react';
// import  ReactDOM  from 'react-dom';
// import styles from './post.css';
// import { CommentForm } from './CommentForm';

// interface IPost {
//   onClose?: () => void;
// }

// export function Post(props: IPost) {

//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClick(event:MouseEvent) {
//       if (event.target instanceof Node && !ref.current?.contains(event.target)) {
//         props.onClose?.();
//       }
//     }
//     document.addEventListener('click', handleClick)

//     return () => {
//       document.removeEventListener('click', handleClick)

//     }
//   }, []);

//   const node = document.querySelector('#modal_root');
//   if (!node) return null;

//   return ReactDOM.createPortal((
//     <div className={styles.modal} ref={ref}>
//       <h2 className={styles.title}>Реплицированные с зарубежных источников возможности</h2>
//       <div className={styles.content}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id dolor aliquam laborum ipsa autem fuga illo! Vel, reprehenderit consectetur!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id dolor aliquam laborum ipsa autem fuga illo! Vel, reprehenderit consectetur!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id dolor aliquam laborum ipsa autem fuga illo! Vel, reprehenderit consectetur!</p>
//       </div>
//       <CommentForm/>
//     </div>
//   ), node);
// }


import React, { useEffect } from 'react';
import ReactDOM  from 'react-dom';
// @ts-ignore
import ModalPostWrapper from './style.ts';
import {CommentForm} from './CommentFormContainer/CommentForm/index.js';
import { Comments } from './Comments';
import { CommentFormContainer } from './CommentFormContainer';

interface IModalPostProps {
  onClose?: () => void;
}

export function Post({onClose}: IModalPostProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const modal = document.querySelector('#modal_root');

  if (!modal) return null;

  return ReactDOM.createPortal((
    <ModalPostWrapper ref={ref}>
      <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad corporis tempore reprehenderit provident architecto, maxime fugit? Eaque est repellendus quaerat obcaecati, commodi voluptates explicabo aperiam minus iusto? Doloremque, vero.</h2>

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto non hic error delectus. Error eos quas doloribus amet voluptatem unde aut, eaque magnam asperiores, modi eius beatae consequuntur alias.</p>
        </div>
      </div>
      <CommentFormContainer button={'Комментировать'} />
      <Comments />
    </ModalPostWrapper>
  ), modal);
}
