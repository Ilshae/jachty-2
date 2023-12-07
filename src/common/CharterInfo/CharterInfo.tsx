import { FC } from "react"
import styled from "styled-components"
import charterInfoSections from "./CharterInfoSections.tsx"
import { SectionType } from "../types.ts"
import { device } from "../../theme.ts"

const CharterInfo: FC<{ showTitle?: boolean }> = ({ showTitle = true }) => (
  <>
    {showTitle ? <h3>Informacje o czarterze</h3> : null}
    <Wrapper>
      {charterInfoSections.map(({ name, description }) => (
        <Section name={name} description={description} />
      ))}
    </Wrapper>
  </>
)

const Section: FC<SectionType> = ({ name, description }) => (
  <StyledSection>
    <h4>{name}</h4>
    {description}
  </StyledSection>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`

const StyledSection = styled.section`
  padding-bottom: 24px;

  &:nth-of-type(1) {
    grid-area: 1 / span 2;
  }

  &:nth-of-type(2) {
    grid-area: 1 / span 2;
  }

  &:nth-of-type(3) {
    grid-area: 1 / span 2;
  }

  &:nth-of-type(4) {
    grid-area: 2 / span 3;
  }

  &:last-of-type {
    grid-area: 2 / span 3;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: 400;
    margin: 8px 0;
  }

  li {
    margin: 4px 0;
  }

  @media ${device.laptop} {
    &:nth-of-type(1) {
      grid-area: 1 / span 3;
    }

    &:nth-of-type(2) {
      grid-area: 1 / span 3;
    }

    &:nth-of-type(3) {
      grid-area: 2 / span 6;
    }

    &:nth-of-type(4) {
      grid-area: 3 / span 6;
    }

    &:last-of-type {
      grid-area: 4 / span 6;
    }
  }

  @media ${device.mobileL} {
    &:nth-of-type(1) {
      grid-area: 1 / span 6;
    }

    &:nth-of-type(2) {
      grid-area: 2 / span 6;
    }

    &:nth-of-type(3) {
      grid-area: 3 / span 6;
    }

    &:nth-of-type(4) {
      grid-area: 4 / span 6;
    }

    &:last-of-type {
      grid-area: 5 / span 6;
    }
  }
`

export default CharterInfo
