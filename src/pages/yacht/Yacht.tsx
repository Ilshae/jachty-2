import { useParams } from "react-router-dom"
import yachts from "../../data/yachts.ts"
import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import { FC } from "react"
import { SectionType } from "../../common/types.ts"
import yachtSections from "./yachtSections.tsx"

const Yacht = () => {
  const { url } = useParams()
  const yacht = yachts.find((y) => y.url === url)
  if (!yacht) {
    return "Error"
  }

  const { id } = yacht

  return (
    <Container>
      <h1>{id}</h1>
      {yachtSections(yacht).map(({ name, description }) => (
        <Section name={name} description={description} />
      ))}
    </Container>
  )
}

const Section: FC<SectionType> = ({ name, description }) => (
  <StyledSection>
    <h3>{name}</h3>
    {description}
  </StyledSection>
)

const Container = styled(CommonContainer)`
  padding: 32px 0;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.bigTitle};
    font-family: ${({ theme }) => theme.fontFamily.action};
    text-transform: uppercase;
    text-align: center;
  }
`

const StyledSection = styled.section`
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin: 12px 0;
    width: 100%;
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

export default Yacht
