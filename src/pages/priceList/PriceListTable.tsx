import { FC } from "react"
import { Link as RRDLink } from "react-router-dom"
import {
  saturdayDates,
  saturdayYachts,
  sundayDates,
  sundayYachts,
  Yacht,
} from "../../data/yachts.ts"
import styled from "styled-components"
import { WeekendDay } from "./enums.ts"

export const PriceListTable: FC<{ weekendDay: WeekendDay }> = ({
  weekendDay,
}) => {
  const tHeadTitle =
    weekendDay === WeekendDay.SATURDAY
      ? "Sobotnie zmiany załóg"
      : "Niedzielne zmiany załóg"

  const tHead =
    weekendDay === WeekendDay.SATURDAY
      ? saturdayDates.map((date) => <th key={date}>{date}</th>)
      : sundayDates.map((date) => <th key={date}>{date}</th>)

  const yachts =
    weekendDay === WeekendDay.SATURDAY
      ? saturdayYachts.map((yacht) => <Row key={yacht.id} yacht={yacht} />)
      : sundayYachts.map((yacht) => <Row key={yacht.id} yacht={yacht} />)

  return (
    <Table>
      <thead>
        <tr>
          <th>{tHeadTitle}</th>
          <FillerTh key={"filler"} />
        </tr>
      </thead>
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

const FillerTh: FC = () => {
  const ths = []
  for (let i = 0; i < 12; i++) {
    ths.push(<th key={i} />)
  }
  return ths
}

const Table = styled.table`
  background-color: ${({ theme }) => theme.color.light};
  border: 3px solid ${({ theme }) => theme.color.primary};
  font-weight: bold;
  border-spacing: 0;
  width: 100%;

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

const Row: FC<{ yacht: Yacht }> = ({ yacht }) => (
  <tr key={yacht.id}>
    <td key={yacht.id}>
      <Link key={yacht.id} to={`/${yacht.url}`}>
        {yacht.id}
      </Link>
    </td>
    {Object.values(yacht.priceList).map((price, index) => (
      <td key={index}>{price}</td>
    ))}
  </tr>
)

const Link = styled(RRDLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`
