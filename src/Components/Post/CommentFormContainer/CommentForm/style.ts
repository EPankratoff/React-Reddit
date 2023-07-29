import styled from 'styled-components';
import COLORS from '../../../../baseui/colors';

const CommentFormWrapper = styled.form`
    display: grid; 
    grid-template-columns: 1fr 220px; 
    grid-auto-rows: min-content; 
    gap: 0px 0px; 
    grid-template-areas: 
      "textarea textarea"
      "nav button"; 

    textarea {
      resize: none;
      border: 1px solid ${COLORS.GRAYD9};
      border-radius: 3px 3px 0px 0px;
      grid-area: textarea;
      padding: 16px 18px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${COLORS.GRAY99};
    }

    button {
      grid-area: button;
      background: ${COLORS.ORANGE};
      border-radius: 0px 0px 3px 0px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: ${COLORS.WHITE};
      height: 50px;
      width: 220px;
    }

    div {
      grid-area: nav;
      background: ${COLORS.GRAYF3};
    }
    
  @media all and (min-width: 1024px) {
    textarea {

    }
  }
`

export default CommentFormWrapper;