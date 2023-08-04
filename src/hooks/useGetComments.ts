import React from 'react';
import axios from 'axios';
import { IPostsData } from '../hooks/usePostsData';
import { tokenContext } from '../Components/context/tokenContext';

export interface IComment {
  author: string;
  text: string;
  time: number;
}

export function useGetComments(subreddit: string, id: string, userName?: string) {
  const [comments, setComments] = React.useState<IComment[]>([]);
  const token = React.useContext(tokenContext);

  React.useEffect(() => {
    const sort = "old";
    const threaded = false;

    axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${id}`, {
      // headers: { Authorization: `bearer ${token}` },
      maxRedirects: 0 // Отключаем автоматическое следование за перенаправлениями
    })
      .then((res) => {
        // Проверяем статус ответа на перенаправление (302)
        if (res.status === 302 && res.headers?.location) {
          // Выполняем запрос по новому URL
          return axios.get(res.headers.location, {
            headers: { Authorization: `bearer ${token}` }
          });
        }

        return res; // Возвращаем исходный ответ, если нет перенаправления
      })
      .then((res) => {
        // Проверяем, существует ли свойство 'data' и содержит ли оно 'children'
        if (res?.data?.data?.children) {
          const data = res.data.data.children.map((comment: any) => {
            const { author, body, created_utc } = comment.data;
            return {
              author,
              text: body,
              time: created_utc,
            };
          });

          setComments(data);
        } else {
          // Обрабатываем случай, когда свойство 'data' или 'children' отсутствует
          console.log('Invalid API response:', res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subreddit, id, token]);

  return comments;
}
