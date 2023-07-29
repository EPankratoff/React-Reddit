import styled from 'styled-components'
import COLORS from '../../../../../baseui/colors';

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 4px;

  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${COLORS.GRAYC4};
  }

  & > [data-rotate="down"] {
    transform: rotate(180deg);
  }

  @media all and (min-width: 1024px) {
    flex-direction: column;
    gap: 4px 0;

    & > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: ${COLORS.BLACK};
    }
  }
`

export default Rating;