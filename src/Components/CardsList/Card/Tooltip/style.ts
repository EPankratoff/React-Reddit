import styled from 'styled-components'

const Tooltip = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  margin-right: 14px;
  cursor: pointer;

  &:focus, &:hover, &.--active {
    background: rgba(51, 51, 51, 0.1);
  }

  @media all and (min-width: 1024px) {
    margin: 0;
    transform: rotate(90deg);
  }
`

export default Tooltip;