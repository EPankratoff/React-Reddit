import React from 'react';
// @ts-ignore
// import styles from './style.ts';
import * as Icons from '../../assets/icons';

export enum EIcons {
  add,
  arrow,
  arrows,
  claim,
  comments,
  forwardDv,
  hideDv,
  raiting,
  remove,
  saveDv,
  tooltip,
  forward,
  avatar,
  complaint,
}

const icons = {
  [EIcons.add]: <Icons.AddIcon />,
  [EIcons.arrow]: <Icons.ArrowIcon />,
  [EIcons.arrows]: <Icons.ArrowsIcon />,
  [EIcons.claim]: <Icons.ClaimDvIcon />,
  [EIcons.comments]: <Icons.CommentsIcon />,
  [EIcons.forwardDv]: <Icons.ForwardDvIcon />,
  [EIcons.hideDv]: <Icons.HideDvIcon />,
  [EIcons.raiting]: <Icons.RaitingIcon />,
  [EIcons.remove]: <Icons.RemoveIcon />,
  [EIcons.saveDv]: <Icons.SaveDvIcon />,
  [EIcons.tooltip]: <Icons.TooltipIcon />,
  [EIcons.forward]: <Icons.ForwardIcon />,
  [EIcons.avatar]: <Icons.AvatarIcon />,
  [EIcons.complaint]: <Icons.ComplaintIcon />,
}

// console.log(icons[EIcons.add])

interface IIconProps {
  name: EIcons
}

export function Icon({name}: IIconProps) {
  return (
    <>
      {icons[name]}
    </>
  );
}
