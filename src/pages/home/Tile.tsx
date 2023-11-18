import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"
import { Card as MUICard, CardContent as MUICardConent } from "@mui/material"
import { Link } from "react-router-dom"

const Tile: FC<Yacht> = ({ id, url, previewGallery }: Yacht) => {
  return (
    <Card>
      <CardActions>{id}</CardActions>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

const Card = styled(MUICard)`
  box-shadow: ${({ theme }) => theme.shadow.box2} !important;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.shadow.light};
`

const CardActions = styled(MUICardConent)`
  text-align: center;
  padding: 16px;
`

const CardContent = styled(MUICardConent)`
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
