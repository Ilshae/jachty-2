import { useParams } from "react-router-dom"
import yachts from "../../data/yachts.ts"
import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import { FC } from "react"
import { SectionType } from "../../common/types.ts"
import yachtSections from "./yachtSections.tsx"
import { device } from "../../theme.ts"

const Yacht = () => {
  const { url } = useParams()
  const yacht = yachts.find((y) => y.url === url)
  if (!yacht) {
    return "Error"
  }

  const { id } = yacht
  const sections = yachtSections(yacht)

  return (
    <Container>
      <h1>{id}</h1>
      <Wrapper>
        <Section
          name={sections[0].name}
          description={sections[0].description}
        />
        <Section
          name={sections[1].name}
          description={sections[1].description}
        />
      </Wrapper>
      <Section name={sections[2].name} description={sections[2].description} />
      <Section name={sections[3].name} description={sections[3].description} />
    </Container>
  )
}

const Section: FC<SectionType> = ({ name, description }) => (
  <StyledSection>
    <h3>{name}</h3>
    <div>{description}</div>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.33fr 0.66fr;

  @media ${device.laptopL} {
    grid-template-columns: 0.5fr 0.5fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

const StyledSection = styled.section`
  padding-bottom: 24px;

  &:first-child {
    padding-right: 64px;
  }

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

  @media ${device.laptop} {
    &:first-of-type {
      padding-right: 0;
      div {
        width: 90%;
        margin: 0 auto;
      }
    }
  }

  @media ${device.laptop} {
    &:first-of-type {
      div {
        width: 100%;
      }
    }
  }
`

export default Yacht
