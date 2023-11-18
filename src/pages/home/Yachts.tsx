import { FC } from "react"
import styled from "styled-components"
import { Container } from "../../common/styles.ts"
import Tile from "./Tile.tsx"
import yachts from "../../data/yachts.ts"

const Yachts: FC = () => {
  return (
    <StyledContainer>
      {yachts.map((yacht) => (
        <Tile key={yacht.id} {...yacht} />
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export default Yachts
