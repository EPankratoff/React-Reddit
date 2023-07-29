import React from 'react';
// @ts-ignore
import Wrapper from './style.ts'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
