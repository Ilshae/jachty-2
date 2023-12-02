import { useParams } from "react-router-dom"
import yachts from "../../data/yachts.ts"
import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import yachtSections from "./YachtSections.tsx"
import { FC } from "react"
import { SectionType } from "../../common/types.ts"

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
      {yachtSections.map(({ name, description }) => (
        <Section name={name} description={description} />
      ))}
    </Container>
  )
}

const Section: FC<SectionType> = ({ name, description }) => (
  <StyledSection>
    <h4>{name}</h4>
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
