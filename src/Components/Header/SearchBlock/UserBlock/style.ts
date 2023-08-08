import styled from 'styled-components'
import COLORS from '../../../../baseui/colors';

const UserBLockWrapper = styled.div`
  a {
    picture {
      border: 1px solid transparent;
      padding: 2px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  a:hover {
    picture {
      border: 1px solid ${COLORS.ORANGE};
    }
  }

  p {
    display: none;
  }

  svg {
    transform: scale(.6);
  }

  @media all and (min-width: 1024px) {
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0 13px;

      img {
        width: 50px;
        height: 50px;
      }
    }

    svg {
      transform: scale(1);
    }

    p {
      display: inline;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      color: ${COLORS.GRAY99};
    }

    a:hover {
      p {
        color: ${COLORS.ORANGE};
      }
    }
  }
`

export default UserBLockWrapper;