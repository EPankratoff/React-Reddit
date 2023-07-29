import styled from 'styled-components'
import COLORS from '../../../baseui/colors';

const Wrapper = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 11px 20px;
  border-radius: 7px;
  margin: 0 0 20px;

  @media all and (min-width: 1024px) {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
  }
`

export default Wrapper;