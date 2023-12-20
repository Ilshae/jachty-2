import { Yacht } from "../../data/yachts.ts"
import { FC, useState } from "react"
import {
  ImageList as MUIImageList,
  ImageListItem as MUIImageListItem,
} from "@mui/material"
import CReactPlayer from "react-player"
import styled from "styled-components"
import LightBox, { Slide } from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { device } from "../../theme.ts"

const YachtGallery: FC<{
  gallery?: Yacht["gallery"]
  video?: Yacht["video"]
}> = ({ gallery, video }) => {
  const [index, setIndex] = useState(-1)

  if (gallery) {
    const slides: Slide[] = gallery?.map((i) => ({
      src: `/assets/yachts/${i}`,
    }))

    return (
      <>
        <ImageList>
          {gallery.map((img, index) => (
            <ImageListItem key={img}>
              <img
                src={`/assets/yachts/${img}`}
                key={img}
                alt={img}
                onClick={() => setIndex(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <LightBox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
          plugins={[Thumbnails, Zoom]}
          animation={{ zoom: 500 }}
          zoom={{
            maxZoomPixelRatio: 2,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />
        {video ? (
          <Wrapper $videos={video.length}>
            {video.map((v) => (
              <ReactPlayer key={v} url={v} controls={true} width={"100%"} />
            ))}
          </Wrapper>
        ) : null}
      </>
    )
  }

  if (!gallery) return <NoGallery>Zdjęcia dostępne wkrótce</NoGallery>
}

const ImageList = styled(MUIImageList)`
  grid-template-columns: repeat(5, 1fr) !important;

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr) !important;
  }
`

const ImageListItem = styled(MUIImageListItem)`
  margin: 0 !important;

  img {
    cursor: pointer;
  }
`

const Wrapper = styled.div<{ $videos: number }>`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: ${({ $videos }) => ($videos === 1 ? "50%" : "100%")};

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    width: 80% !important;
    ${({ $videos }) =>
      $videos && `height: calc(${$videos} * 250px)`} !important;
  }

  @media ${device.mobileL} {
    width: 100% !important;
    ${({ $videos }) =>
      $videos && `height: calc(${$videos} * 200px)`} !important;
  }

  @media ${device.mobileM} {
    width: 100% !important;
    ${({ $videos }) =>
      $videos && `height: calc(${$videos} * 150px)`} !important;
  }
`

const ReactPlayer = styled(CReactPlayer)`
  &:first-of-type {
    padding: 0 2px 0 0;
  }

  &:last-of-type {
    padding: 0 0 0 2px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;

    &:first-of-type {
      padding: 2px 0;
    }

    &:last-of-type {
      padding: 2px 0;
    }
  }
`

const NoGallery = styled.h4`
  background-color: ${({ theme }) => theme.color.light80};
`

export default YachtGallery
