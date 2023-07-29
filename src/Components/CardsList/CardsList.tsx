// import React from 'react';
// // @ts-ignore
// import CardsListWrapper from './style.ts';
// import { Card } from './Card';

// export function CardsList() {
//   return (
//     <CardsListWrapper>
//       <Card />
//     </CardsListWrapper>
//   );
// }

// import React, { useContext } from 'react';
// // @ts-ignore
// import CardsListWrapper from './style.ts';
// import { Card } from './Card';
// import { usePostsData } from '../../hooks/usePostsData';
// import { PostsContext  } from '../context/PostsContext';
// import { nanoid } from 'nanoid';

// export function CardsList() {
//   const [ListPostData] = usePostsData();
// console.log(ListPostData)
//   return (
//     <CardsListWrapper>
//       {ListPostData.map(({id, title, preview, author, ups, sr_detail, created_utc}) => {
//         const data = {id, title, preview, author, ups, sr_detail, created_utc};
      
//       return <PostsContext.Provider value={data} key={nanoid()}><Card /></PostsContext.Provider>
        
//       })}
//     </CardsListWrapper>
//   )
// }

import React from 'react';
import { Card } from './Card';
import { usePostsData } from '../../hooks/usePostsData';

export function CardsList() {
  const ListPostData = usePostsData();

  return (
    <div>
      {ListPostData.map(postData => (
        <Card key={postData.id} postData={postData} />
      ))}
    </div>
  );
}
