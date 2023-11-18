import { FC } from "react"
import styled from "styled-components"
import { CommonContainer } from "../../common/styles.ts"
import Tile from "./Tile.tsx"
import yachts from "../../data/yachts.ts"
import { device } from "../../theme.ts"

const Yachts: FC = () => {
  return (
    <Container>
      {yachts.map((yacht) => (
        <Tile key={yacht.id} {...yacht} />
      ))}
    </Container>
  )
}

const Container = styled(CommonContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 64px;
  padding: 64px 0;

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export default Yachts
