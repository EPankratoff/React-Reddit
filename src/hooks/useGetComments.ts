import React from 'react';
import axios from 'axios';
import { IPostsData } from '../hooks/usePostsData';

export interface IComment {
  map(arg0: (comment: IComment) => React.JSX.Element): unknown;
  author: string;
  text: string;
  time: number;
}

export function useGetComments(postId: string, userName?: string) {
  const [comments, setComments] = React.useState<IComment[]>([]);

  React.useEffect(() => {

    // const postId = id;
    const sort = "old";
    const threaded = false;
    axios.get(`http://oauth.reddit.com/comments/${postId}?sort=${sort}&threded=${threaded}`)
      .then((res) => {
        const data = res.data[1].data.children.map((comment: any) => {
          const { author, body, created_utc } = comment.data;
          return {
            author,
            text: body,
            time: created_utc,
          };
        });

        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  return comments;
}
