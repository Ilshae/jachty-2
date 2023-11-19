import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"
import {
  Card as MUICard,
  CardContent as MUICardConent,
  Button as MUIButton,
} from "@mui/material"
import { Link } from "react-router-dom"
import { device } from "../../theme.ts"

const Tile: FC<Yacht> = ({ id, url, previewGallery }: Yacht) => {
  return (
    <Card>
      <CardActions>
        <Link to={`/${url}`}>
          <Button>{id}</Button>
        </Link>
      </CardActions>
      <CardContent>
        {previewGallery && previewGallery.length > 0 ? (
          previewGallery.map((image) => (
            <Link key={image} to={`/${url}`}>
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

const Button = styled(MUIButton)`
  font-size: ${({ theme }) => theme.fontSize.title} !important;
  font-family: ${({ theme }) => theme.fontFamily.action} !important;
  letter-spacing: 3px;
  padding: 16px;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary}!important;
  color: ${({ theme }) => theme.color.light} !important;
  border: none;
  cursor: pointer;

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.subTitle} !important;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary} !important;
    color: ${({ theme }) => theme.color.dark} !important;
    font-weight: bold !important;
  }
`

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

    @media ${device.tablet} {
      height: 300px;
    }

    @media ${device.mobileM} {
      height: 250px;
    }

    @media ${device.mobileM} {
      height: 200px;
    }
  }

  img:hover {
    cursor: pointer;
  }
`

export default Tile
