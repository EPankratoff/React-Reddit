import React from 'react';
// @ts-ignore
import ContentMain from './style.ts';

interface IComponentProps {
  children?: React.ReactNode
}

export function Content({children}: IComponentProps) {
  return (
    <ContentMain>
      {children}
    </ContentMain>
  );
}
