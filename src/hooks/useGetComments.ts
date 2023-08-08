import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IState } from '../store/store';

export interface IGetComments {
  author: string;
  text: string;
  time: number;
}

export function useGetComments(id: string) {
  const token = useSelector<IState, string>(state => state.token);
  const [comments, setComments] = React.useState<IGetComments[]>([]);

  React.useEffect(() => {
    if (!token || token === "undefined") return;

    const postId = id;
    const sort = "old";
    const threaded = false;

    axios.get(`https://oauth.reddit.com/comments/${postId}?sort=${sort}&threded=${threaded}`, {
      headers: {Authorization: `bearer ${token}`}
    }).then((res) => {
      const children = res.data[1].data.children;

      if (children) {
        const data = children.map((comment: {data: any}) => {
          let {author, body, created_utc} = comment.data;

          return {
            author, text: body, time: created_utc
          }
        });
        
        setComments(data.filter((el: { author: string }) => el.author !== undefined))
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [token])

  return [comments]
}