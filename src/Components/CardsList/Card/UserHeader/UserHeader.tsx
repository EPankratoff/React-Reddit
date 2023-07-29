// @ts-ignore
import CardUserHeader from './style.ts';
import React from 'react';
import { IPostsData } from '../../../../hooks/usePostsData.js';

interface UserHeaderProps {
  author: string; // Проп для передачи имени автора
  created_utc: number; // Проп для передачи времени создания поста
  avatarUrl: string; // Проп для передачи URL аватарки автора
}

export function UserHeader({ author, created_utc, avatarUrl }: UserHeaderProps) {
  const timeAgo = calculateTimeAgo(created_utc); // Функция для расчета времени прошедшего с момента создания поста

  return (
    <CardUserHeader>
      <img src={avatarUrl} alt="" /> {/* Используем переданный URL аватарки */}
      <p>{author}</p>
      <p><span>опубликовано</span> {timeAgo} назад</p>
    </CardUserHeader>
  );
}

// Функция для расчета времени прошедшего с момента создания поста
function calculateTimeAgo(created_utc: number) {
  const currentTime = Math.floor(Date.now() / 1000); // Текущее время в секундах
  const timeDifference = currentTime - created_utc; // Разница во времени между текущим временем и временем создания поста

  // Вычисление времени прошедшего с момента создания поста в часах
  const hoursAgo = Math.floor(timeDifference / 3600);

  // Форматирование вывода времени в зависимости от количества часов
  if (hoursAgo === 0) {
    return 'менее часа';
  } else if (hoursAgo === 1) {
    return '1 час';
  } else {
    return `${hoursAgo} часа`;
  }
}
