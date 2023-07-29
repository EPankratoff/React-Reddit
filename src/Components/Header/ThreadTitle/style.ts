import styled from 'styled-components'

const Title = styled.h1`
  font-weight: normal;
  padding: 0 20px;
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 15px;

  @media all and (min-width: 1024px) {
    padding: 0;
    margin: 0 27px 0 0;
    font-size: 28px;
    line-height: 33px;
  }
`

export default Title;