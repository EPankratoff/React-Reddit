import React from 'react';
// @ts-ignore
import DropdownWrapper from './style.ts';
import {Tooltip} from './Tooltip'

type TTarget = {
  props: {
    style?: string
  }
}

interface IDropdownProps {
  target: TTarget | React.ReactNode;
  children: React.ReactNode;
  isOpen?: Boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export type TButton = {
  bottom: number,
  left: number,
}

const NOOP = () => {};

export function Dropdown({target, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const [buttonPosition, setButtonPosition] = React.useState<TButton | {}>({});

  const button = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose() , [isDropdownOpen])

  const handlerOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
      const position = button.current?.getBoundingClientRect();
      
      setButtonPosition({
        bottom: (position as TButton).bottom + window.pageYOffset,
        left: (position as TButton).left,
      })
    }
  }

  return (
    <DropdownWrapper>
      <div ref={button} onClick={handlerOpen}>
        {target}
      </div>
      {isDropdownOpen && (
        // <div>
        //   <div onClick={() => setIsDropdownOpen(false)}>
        //     {children}
        //   </div>
        //   <button onClick={() => setIsDropdownOpen(false)}>Закрыть</button>
        // </div>
        <Tooltip children={children} position={buttonPosition} setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </DropdownWrapper>
  );
}
