import styled from 'styled-components'
import COLORS from '../../../../baseui/colors';

const NewsTitleWrapper = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  padding: 0 20px;
  grid-area: --title;
  cursor: pointer;

  &:hover {
    color: ${COLORS.ORANGE}
  }

  @media all and (min-width: 1024px) {
    font-size: 20px;
    line-height: 23px;
    padding: 0;
    max-width: 540px;
  }
`

export default NewsTitleWrapper;