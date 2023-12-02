import { FC } from "react"
import styled from "styled-components"
import { SectionType, charterInfoSections } from "./CharterInfoSections.tsx"

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
  h4 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: 400;
    margin: 8px 0;
  }
`

export default CharterInfo
