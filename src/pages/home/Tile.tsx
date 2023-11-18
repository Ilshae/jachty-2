import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"
import { Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"

const Tile: FC<Yacht> = ({ id, url, previewGallery }: Yacht) => {
  return (
    <StyledCard>
      <StyledCardActions>{id}</StyledCardActions>
      <StyledCardContent>
        {previewGallery && previewGallery.length > 0 ? (
          previewGallery.map((image) => (
            <Link to={`/${url}`}>
              <img src={`/assets/yachts/${image}`} alt={id} />
            </Link>
          ))
        ) : (
          <Link to={`/${url}`}>
            <img src={`/assets/backgrounds/noGallery.jpg`} alt={id} />
          </Link>
        )}
      </StyledCardContent>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  box-shadow: ${({ theme }) => theme.shadow.box2};
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.shadow.light};
`

const StyledCardActions = styled(CardContent)`
  text-align: center;
`

const StyledCardContent = styled(CardContent)`
  padding: 0 !important;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    vertical-align: middle;
    border-style: none;
  }
  img:hover {
    cursor: pointer;
  }
`

export default Tile
