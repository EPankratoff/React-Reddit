import styled from 'styled-components'
import COLORS from '../../../../../baseui/colors';

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.GRAY99};
  padding: 12px 20px;
  background-color: ${COLORS.WHITE};
  width: 100%;
  border-bottom: 1px solid ${COLORS.GRAYD9};

  svg {
    flex-shrink: 0;
  }

  @media all and (min-width: 1024px) {
    
  }
`

export default ButtonWrapper;