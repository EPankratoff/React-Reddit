import React, { useState } from 'react';
// @ts-ignore
import styles from './style.css';
import { Post } from '../../../Post';

interface NewsTitleProps {
  title: string; // Проп для передачи заголовка новости
  userName: string; // Проп для передачи имени пользователя
  id: string; // Проп для передачи ID поста
}

export function NewsTitle({ title, userName, id }: NewsTitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
        {title}
      </a>

      {isModalOpened && (
        <Post onClose={() => {setIsModalOpened(false)}} userName={userName} id={id} /> 
      )}
    </h2>
  );
}
