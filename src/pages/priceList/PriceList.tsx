import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import { PriceListTable } from "./PriceListTable.tsx"
import { WeekendDay } from "./enums.ts"
import CharterInfo from "../../common/CharterInfo/CharterInfo.tsx"

const PriceList = () => {
  return (
    <Container>
      <VerticalScroll>
        <Section>
          <PriceListTable weekendDay={WeekendDay.SATURDAY} />
        </Section>
        <Section>
          <PriceListTable weekendDay={WeekendDay.SUNDAY} />
        </Section>
      </VerticalScroll>
      <Section>
        <p>
          Ceny podane za dobę czarterową. W terminach od początku czerwca do
          połowy września jachty czarterujemy w modułach tygodniowych, w
          pozostałych na dni.
        </p>
      </Section>
      <Section>
        <CharterInfo />
      </Section>
    </Container>
  )
}

const Container = styled(CommonContainer)`
  padding: 32px 0;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin: 12px 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.light80};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: 400;
    margin: 8px 0;
    background-color: ${({ theme }) => theme.color.light80};
  }
`

const VerticalScroll = styled.div`
  overflow-x: auto;
`

const Section = styled.section`
  &:nth-of-type(1) {
    padding-bottom: 32px;
  }

  p {
    background-color: ${({ theme }) => theme.color.light80};
  }
`

export default PriceList
