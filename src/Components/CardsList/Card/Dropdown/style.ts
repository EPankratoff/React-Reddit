import styled from 'styled-components'
import COLORS from '../../../../baseui/colors';

const DropdownWrapper = styled.div`
  grid-area: --tooltip;
  position: relative;

  & > div:nth-child(2) {
    position: absolute;
    z-index: 100;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    right: 20px;
    width: 140px;
    overflow: hidden;

    &>button {
      width: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: ${COLORS.GRAY66};
      background-color: ${COLORS.GRAYD9};
      padding: 11px 23px 12px 23px;
    }
  }

  @media all and (min-width: 1024px) {
    
  }
`

export default DropdownWrapper;