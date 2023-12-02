import { FC } from "react"
import styled from "styled-components"
import charterInfoSections from "./CharterInfoSections.tsx"
import { SectionType } from "../types.ts"

const CharterInfo = () => (
  <>
    <h3>Informacje o czarterze</h3>
    {charterInfoSections.map(({ name, description }) => (
      <Section name={name} description={description} />
    ))}
  </>
)

const Section: FC<SectionType> = ({ name, description }) => (
  <StyledSection>
    <h4>{name}</h4>
    {description}
  </StyledSection>
)

const StyledSection = styled.section`
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: 400;
    margin: 8px 0;
  }

  li {
    margin: 4px 0;
  }
`

export default CharterInfo
