import React from 'react';
import styled from 'styled-components';
import COLORS from '../../baseui/colors';

const Arrow = styled.div`
  cursor: pointer;

  &:hover svg path {
    fill: ${COLORS.ORANGE}
  }
`;

export function ArrowIcon() {
  return (
    <Arrow>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" fill="none"><path fill="#C4C4C4" d="M9.5 0 0 10h19L9.5 0Z"/></svg>
    </Arrow>
  );
}
