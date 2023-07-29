import styled from 'styled-components'
import COLORS from '../../../../baseui/colors';

const CardUserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 15px;
  margin-left: 20px;
  grid-area: --header;
  
  & > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 3px ${COLORS.GRAY99};
  }

  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  & > p:nth-child(2) {
    color: ${COLORS.ORANGE};
    cursor: pointer;
  }

  & > p:last-child {
    color: ${COLORS.GRAY99};
    margin-left: -4px;

    & > span {
      color: inherit;
      display: none;
    }
  }

  @media all and (min-width: 1024px) {
    margin: 0;
    
    & > p:last-child > span  {
      display: inline;
    }

    & > p:nth-child(2):hover {
      text-decoration: underline;
    }
  }
`

export default CardUserHeader;