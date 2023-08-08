import styled from 'styled-components';
import COLORS from '../../../baseui/colors';

export const CommentsHeader = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.GRAY99};
  margin-bottom: 9px;

  span {
    color: ${COLORS.ORANGE};
  }
`;

export const CommentsText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

export const CommentsFooter = styled.div`
  margin: 13px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 27px;
`;

export const CommentsButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.GRAY99};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 5px;
`;

export const CommentsWrapper = styled.div`
  padding-left: 20px;
  padding-top: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0 21px;

  &>svg {
    flex-shrink: 0;
  }

  &>div {
    width: 100%;
  }

  @media all and (min-width: 1024px) {
    
  }
`

export const CommentFormReplay = styled.div`
  display: block;
`;