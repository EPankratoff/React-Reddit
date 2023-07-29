// import React from 'react';
// // @ts-ignore
// import PictureWrapper from './style.ts';

// export function Picture() {
//   return (
//     <PictureWrapper>
//       <img src="https://cdn.dribbble.com/userupload/6703238/file/original-6708f8c7a48bb7135f89384d8714aa7a.jpeg?compress=1&resize=1200x900" alt="" />
//     </PictureWrapper>
//   );
// }

import React from 'react';
// @ts-ignore
import PictureWrapper from './style.ts';

interface PictureProps {
  imageUrl: string; // Проп для передачи URL картинки
}

export function Picture({ imageUrl }: PictureProps) {
  return (
    <PictureWrapper>
      <img src={imageUrl} alt="Post Picture" />
    </PictureWrapper>
  );
}

