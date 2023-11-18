import { FC } from "react"
import styled, { keyframes } from "styled-components"
import Waves from "./Waves.tsx"
import { Container } from "../../common/styles.ts"

const Hero: FC = () => {
  return (
    <Wrapper>
      <Background />
      <Header>
        <h1>Czartery na mazurach</h1>
        <h2>Komfortowe i szybkie jachty, życzliwa obsługa, fachowy serwis</h2>
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

const Header = styled(Container)`
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    letter-spacing: 5px;
    font-size: ${({ theme }) => theme.fontSize.reallyBigTitle};
    text-transform: uppercase;
    font-weight: normal;
    text-shadow: ${({ theme }) => theme.shadow.text};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.bigTitle};
    font-weight: normal;
    text-shadow: ${({ theme }) => theme.shadow.text};
  }
`

export default Hero
