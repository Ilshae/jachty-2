import styled from "styled-components"
import { device } from "../theme.ts"

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;

  @media ${device.desktop} {
    margin: ${({ theme }) => theme.container.margin.desktop};
  }
  @media ${device.laptopL} {
    margin: ${({ theme }) => theme.container.margin.laptopL};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.regular};
    margin: ${({ theme }) => theme.container.margin.laptop};
  }
  @media ${device.tablet} {
    margin: ${({ theme }) => theme.container.margin.tablet};
  }
  @media ${device.mobileM} {
    margin: ${({ theme }) => theme.container.margin.mobileM};
  }
`