import { FC } from "react"
import styled, { keyframes } from "styled-components"

const Waves: FC = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0
              58-18 88-18s
              58 18 88 18
              58-18 88-18
              58 18 88 18
              v44h-352z"
        />
      </defs>
      <Wave1>
        <use href="#gentle-wave" x="50" y="3" fill="#A6D1FF" />
      </Wave1>
      <Wave2>
        <use href="#gentle-wave" x="50" y="0" fill="#5E94FF" />
      </Wave2>
      <Wave3>
        <use href="#gentle-wave" x="50" y="9" fill="#315BB0" />
      </Wave3>
      <Wave4>
        <use href="#gentle-wave" x="50" y="6" fill="#fff" />
      </Wave4>
    </Svg>
  )
}

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 50px;
  max-height: 50px;
  margin: 0;
  z-index: 5;
  bottom: 0;
  position: absolute;
  left: 0px;
  float: left;
`

const Move1 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`

const Move2 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`

const Move3 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`

const Move4 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`

const Wave1 = styled.g`
  > use {
    animation: ${Move1} 10s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
`
const Wave2 = styled.g`
  > use {
    animation: ${Move2} 8s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
`
const Wave3 = styled.g`
  > use {
    animation: ${Move3} 6s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
`
const Wave4 = styled.g`
  > use {
    animation: ${Move4} 4s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
`

export default Waves
