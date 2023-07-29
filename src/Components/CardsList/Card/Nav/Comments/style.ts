import styled from 'styled-components'
import COLORS from '../../../../../baseui/colors';

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.GRAYC4};

  @media all and (min-width: 1024px) {
    display: none;
  }
`

export default Comments;