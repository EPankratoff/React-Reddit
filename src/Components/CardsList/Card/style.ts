import styled from 'styled-components'
import COLORS from '../../../baseui/colors';

const Card = styled.li`
  position: relative;
  background-color: ${COLORS.WHITE};
  border-radius: 7px;
  display: grid; 
  grid-template-columns: 1fr 45px; 
  grid-template-rows: min-content; 
  grid-template-areas: 
    "--header --tooltip"
    "--title --title"
    "--image --image"
    "--nav --nav"; 

  @media all and (min-width: 1024px) {
    grid-template-columns: 228px 1fr 31px 54px; 
    grid-template-rows: auto; 
    grid-template-areas: 
      "--image --title --tooltip --nav"
      "--image --header --tooltip --nav"; 
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.WHITE};
    padding: 21px 45px 20px 72px;
    border-radius: 0;

    &:hover {
      border: 1px solid ${COLORS.GRAYD9};
    }
  }
`

export default Card;