// import axios from 'axios';
// import React from 'react';
// import { tokenContext } from '../Components/context/tokenContext';

// type TSr_Details = {
//   icon_img: string
// }

// type TPreview = {
//   images?: any
// }

// export interface IPostsData {
//   id: string;
//   title: string;
//   preview: TPreview;
//   author: string;
//   ups: number;
//   sr_detail: TSr_Details;
//   created_utc: number;
// }

// export function usePostsData() {
//   const token = React.useContext(tokenContext);
//   const [data, setData] = React.useState<IPostsData[]>([]);

//   React.useEffect(() => {
//     if (!token || token === "undefined") return;
//     axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
//       headers: {Authorization: `bearer ${token}`}
//     })
//     .then(({data}) => {
//       const array = data.data.children;
//       setData(array.map((item: {data: IPostsData}) => {
//         return {
//           id: item.data.id,
//           author: item.data.author,
//           title: item.data.title,
//           ups: item.data.ups,
//           sr_detail: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png',
//           preview: item.data.preview ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, "&") : 'https://b.thumbs.redditmedia.com/WFgeymV_hst-gtDexMkHnD8o3LmUSY96L2GZjc-K1bc.png',
//           created_utc: item.data.created_utc,
//         }
//       }))
//     }).catch((err) => {
//       console.log(err)
//     })
//   }, [token])

//   return [data]
// }


// hooks/usePostsData.ts
import axios from 'axios';
import React from 'react';
import { tokenContext } from '../Components/context/tokenContext';

type TSr_Details = {
  icon_img: string;
}

type TPreview = {
  images?: any;
}

export interface IPostsData {
  id: string;
  title: string;
  preview: TPreview;
  author: string;
  ups: number;
  sr_detail: TSr_Details;
  created_utc: number;
}

export function usePostsData() {
  const token = React.useContext(tokenContext);
  
  const [data, setData] = React.useState<IPostsData[]>([]);

  React.useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
      headers: { Authorization: `bearer ${token}` } 
    })
    .then(({ data }) => {
      const array = data.data.children;
      setData(array.map((item: { data: IPostsData }) => item.data));
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return data;
}
