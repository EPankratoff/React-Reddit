import styled from 'styled-components'

const CardPicture = styled.div`
  grid-area: --image;
  margin-top: 13px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media all and (min-width: 1024px) {
    max-width: 190px;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    height: 107px;
    margin-top: 0;
  }
`

export default CardPicture;