import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import styled from "styled-components"
import { Card as MUICard, CardContent as MUICardConent } from "@mui/material"
import { Link as RRDLink } from "react-router-dom"
import { device } from "../../theme.ts"

const Tile: FC<Yacht> = ({ id, url, previewGallery }: Yacht) => {
  return (
    <Card>
      <CardActions>
        <Link to={`/${url}`}>{id}</Link>
      </CardActions>
      <CardContent>
        {previewGallery && previewGallery.length > 0 ? (
          previewGallery.map((image) => (
            <RRDLink key={image} to={`/${url}`}>
              <img src={`/assets/yachts/${image}`} alt={id} />
            </RRDLink>
          ))
        ) : (
          <RRDLink to={`/${url}`}>
            <img src={`/assets/backgrounds/noGallery.jpg`} alt={id} />
          </RRDLink>
        )}
      </CardContent>
    </Card>
  )
}

const Card = styled(MUICard)`
  box-shadow: ${({ theme }) => theme.shadow.box} !important;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primaryLighter} !important;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary} !important;
  }

  &:nth-of-type(12) {
    height: 410px;
  }
`

const CardActions = styled(MUICardConent)`
  text-align: center;
  padding: 0 !important;
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

const Link = styled(RRDLink)`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.action};
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.dark};
  width: 100%;
  text-decoration: none;
  padding: 16px;
  font-weight: 600;

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.subTitle} !important;
  }
`

export default Tile
