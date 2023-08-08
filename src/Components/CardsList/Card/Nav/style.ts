import styled from 'styled-components'

const NavWrapper = styled.div`
  grid-area: --nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media all and (min-width: 1024px) {
    justify-content: center;
  }
`

export default NavWrapper;