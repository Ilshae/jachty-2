import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"

const YachtEquipment: FC<{ equipment: Yacht["equipment"] }> = ({
  equipment,
}) => {
  const {
    sailing,
    galleyAndMess,
    powerAndMultimedia,
    security,
    exploitation,
    other,
  } = equipment

  return (
    <Wrapper>
      <List title={"Podstawowe wyposażenie żeglarskie"} items={sailing} />
      <List title={"Kambuz i mesa"} items={galleyAndMess} />
      <List title={"Zasilanie i multimedia"} items={powerAndMultimedia} />
      <List title={"Bezpieczeństwo"} items={security} />
      <List title={"Eksploatacja"} items={exploitation} />
      <List title={"Pozostałe"} items={other} />
    </Wrapper>
  )
}

const List: FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <ListWrapper>
    <h4>{title}</h4>
    {items.join(", ")}
  </ListWrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.light80};

  &:nth-child(1) {
    padding: 0 10px 10px 0;
  }

  &:nth-child(2) {
    padding: 0 0 10px 10px;
  }

  &:nth-child(3),
  &:nth-child(5) {
    padding: 10px 10px 10px 0;
  }

  &:nth-child(4),
  &:nth-child(6) {
    padding: 10px 0 10px 10px;
  }

  @media ${device.tablet} {
    &:nth-child(n) {
      padding: 10px 0;
    }
  }
`

export default YachtEquipment
