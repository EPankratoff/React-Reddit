import React, { useState } from 'react';
// @ts-ignore
import styles from './style.css';
import { Post } from '../../../Post';

interface NewsTitleProps {
  title: string; // Проп для передачи заголовка новости
}

export function NewsTitle({ title }: NewsTitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
        {title}
      </a>

      {isModalOpened && (
        <Post onClose={() => {setIsModalOpened(false)}} />
      )}
    </h2>
  );
}
