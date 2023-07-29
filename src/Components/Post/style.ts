import styled from 'styled-components'
import COLORS from '../../baseui/colors';

const ModalPostWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  z-index: 1000;
  background-color: ${COLORS.WHITE};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.GRAYD9};
    border-radius: 30px;
  }

  @media all and (min-width: 1024px) {
    max-width: 960px;
    width: 100%;
    top: 50%;
    bottom: auto;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    max-height: calc(100vh - 10%);
  }
`

export default ModalPostWrapper;