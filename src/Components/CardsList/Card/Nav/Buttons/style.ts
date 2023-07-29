import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 15px;

  @media all and (min-width: 1024px) {
    display: none;
  }
`

export default Buttons;