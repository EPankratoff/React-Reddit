import styled from 'styled-components'
import COLORS from '../../../baseui/colors';

const SearchBlockWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${COLORS.WHITE};
  border-radius: 0 0 7px 7px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 0 0 38px;

  @media all and (min-width: 1024px) {
    padding: 0;
    margin: 0 0 0 auto;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    order: 3;
  }
`

export default SearchBlockWrapper;