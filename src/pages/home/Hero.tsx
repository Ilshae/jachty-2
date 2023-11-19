import { FC } from "react"
import styled, { keyframes } from "styled-components"
import Waves from "./Waves.tsx"
import { device } from "../../theme.ts"

const Hero: FC = () => {
  return (
    <Wrapper>
      <Background />
      <Header>
        <h1>
          <span>Czartery na mazurach</span>
        </h1>
        <h2>
          <span>
            Komfortowe i szybkie jachty, życzliwa obsługa, fachowy serwis
          </span>
        </h2>
      </Header>
      <Waves />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  min-height: 300px;
  max-height: 500px;
  position: relative;
  text-align: center;
`

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-15px);
  }
  100% {
    transform: translatey(0px);
  }
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("../../../public/assets/backgrounds/hero.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: scroll;
  transform: translatey(0px);
  animation: ${float} 5s ease-in-out infinite;
  display: flex;
`

const Header = styled.header`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media ${device.desktop} {
    padding: ${({ theme }) => theme.container.margin.desktop};
  }
  @media ${device.laptopL} {
    padding: ${({ theme }) => theme.container.margin.laptopL};
  }
  @media ${device.laptop} {
    padding: ${({ theme }) => theme.container.margin.laptop};
  }
  @media ${device.tablet} {
    padding: ${({ theme }) => theme.container.margin.tablet};
  }
  @media ${device.mobileM} {
    padding: ${({ theme }) => theme.container.margin.mobileM};
  }

  h1 {
    letter-spacing: 5px;
    font-size: ${({ theme }) => theme.fontSize.reallyBigTitle};
    text-transform: uppercase;
    font-weight: normal;
    text-shadow: ${({ theme }) => theme.shadow.text};

    span {
      background-color: #00000040;
      padding: 5px;
    }

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.bigTitle} !important;
    }

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.title} !important;
    }

    @media ${device.mobileM} {
      font-size: ${({ theme }) => theme.fontSize.subTitle} !important;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.bigTitle};
    font-weight: normal;
    text-shadow: ${({ theme }) => theme.shadow.text};

    span {
      background-color: #00000040;
      padding: 5px;
    }

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.title} !important;
    }

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.subTitle} !important;
    }

    @media ${device.mobileM} {
      font-size: ${({ theme }) => theme.fontSize.regular} !important;
    }
  }
`

export default Hero
