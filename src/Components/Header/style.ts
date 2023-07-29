import styled from 'styled-components'

const Header = styled.header`
  @media all and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 40px;
  }

  @media all and (min-width: 1540px) {
    padding: 67px 0;
  }

`

export default Header;