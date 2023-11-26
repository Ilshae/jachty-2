import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import {
  saturdayDates,
  saturdayYachts,
  sundayDates,
  sundayYachts,
  Yacht,
} from "../../data/yachts.ts"
import { FC } from "react"
import { Link as RRDLink } from "react-router-dom"

const PriceList = () => {
  return (
    <Container>
      <Section>
        <h3>Sobotnie zmiany załóg:</h3>
        <PriceListTable weekendDay={WeekendDay.SATURDAY} />
      </Section>
      <Section>
        <h3>Niedzielne zmiany załóg:</h3>
        <PriceListTable weekendDay={WeekendDay.SUNDAY} />
      </Section>
    </Container>
  )
}

const PriceListTable: FC<{ weekendDay: WeekendDay }> = ({ weekendDay }) => {
  const tHead =
    weekendDay === WeekendDay.SATURDAY
      ? saturdayDates.map((date) => <th key={date}>{date}</th>)
      : sundayDates.map((date) => <th key={date}>{date}</th>)

  const yachts =
    weekendDay === WeekendDay.SATURDAY
      ? saturdayYachts.map((yacht) => <Row yacht={yacht} />)
      : sundayYachts.map((yacht) => <Row yacht={yacht} />)

  return (
    <Table>
      <thead>
        <tr>
          <th>Jacht</th>
          {tHead}
        </tr>
      </thead>
      <tbody>{yachts}</tbody>
    </Table>
  )
}

const Row: FC<{ yacht: Yacht }> = ({ yacht }) => (
  <tr key={yacht.id}>
    <td key={yacht.id}>
      <Link key={yacht.id} to={`/${yacht.url}`}>
        {yacht.id}
      </Link>
    </td>
    {Object.values(yacht.priceList).map((price) => (
      <td>{price}</td>
    ))}
  </tr>
)

const Container = styled(CommonContainer)`
  background-color: ${({ theme }) => theme.color.light};
  padding: 32px 0;
  overflow-x: auto;
`

const Section = styled.section``

const Table = styled.table`
  border: 3px solid ${({ theme }) => theme.color.primary};
  font-weight: bold;
  border-spacing: 0;

  th {
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.light};
    padding: 5px 10px;
  }

  th:first-of-type {
    text-align: center;
  }

  td {
    padding: 10px 5px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.primary20};
    white-space: nowrap;
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.color.primary10};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.color.secondary60};
  }
`

const Link = styled(RRDLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

enum WeekendDay {
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export default PriceList
