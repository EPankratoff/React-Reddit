import React from 'react';
import ReactDOM  from 'react-dom';
// @ts-ignore
import TooltipWrapper from './style.ts';
import { TButton } from '../Dropdown';

interface ITooltipProps {
  children: React.ReactNode,
  setIsDropdownOpen: (arg0: boolean) => void;
  position: TButton | {}
}

export function Tooltip({children, setIsDropdownOpen, position}: ITooltipProps) {
  const modal = document.querySelector('#modal_root');

  if (!modal) return null;

  console.log(position)

  return ReactDOM.createPortal((
    <TooltipWrapper style={{left: (position as TButton).left, top: (position as TButton).bottom}}>
      <div onClick={() => setIsDropdownOpen(false)}>
        {children}
      </div>
      <button onClick={() => setIsDropdownOpen(false)}>Закрыть</button>
    </TooltipWrapper>
  ), modal)
}
