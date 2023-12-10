import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"

const YachtTechnicalData: FC<{ technicalData: Yacht["technicalData"] }> = ({
  technicalData,
}) => {
  return (
    <>
      {Object.values(technicalData).map(({ label, value }) => (
        <Row key={label}>
          <span>{label}:</span>
          <span>{value}</span>
        </Row>
      ))}
    </>
  )
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 0;

  span {
    background-color: ${({ theme }) => theme.color.light80};
  }
`

export default YachtTechnicalData
