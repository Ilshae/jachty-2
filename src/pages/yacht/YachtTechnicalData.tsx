import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"

const YachtTechnicalData: FC<{ technicalData: Yacht["technicalData"] }> = ({
  technicalData,
}) => {
  return (
    <Wrapper>
      {Object.values(technicalData).map(({ label, value }) => (
        <Row>
          <span>{label}:</span>
          <span>{value}</span>
        </Row>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 300px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  span {
    background-color: ${({ theme }) => theme.color.light70};
  }
`

export default YachtTechnicalData
