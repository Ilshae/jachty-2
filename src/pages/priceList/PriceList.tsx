import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import { PriceListTable } from "./PriceListTable.tsx"
import { WeekendDay } from "./enums.ts"
import CharterInfo from "../../common/CharterInfo.tsx"

const PriceList = () => {
  return (
    <Container>
      <VerticalScroll>
        <Section>
          <h3>Sobotnie zmiany załóg:</h3>
          <PriceListTable weekendDay={WeekendDay.SATURDAY} />
        </Section>
        <Section>
          <h3>Niedzielne zmiany załóg:</h3>
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
  background-color: ${({ theme }) => theme.color.light};
  padding: 32px 0;
`

const VerticalScroll = styled.div`
  overflow-x: auto;
`

const Section = styled.section`
  &:nth-of-type(1) {
    padding-bottom: 32px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }
`

export default PriceList
