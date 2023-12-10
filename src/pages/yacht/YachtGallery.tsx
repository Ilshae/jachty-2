import { Yacht } from "../../data/yachts.ts"
import { FC, useState } from "react"
import {
  ImageList as MUIImageList,
  ImageListItem as MUIImageListItem,
} from "@mui/material"
import ReactPlayer from "react-player"
import styled from "styled-components"
import LightBox, { Slide } from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

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
          plugins={[Thumbnails]}
        />
        {video
          ? video.map((v) => (
              <ReactPlayer key={v} url={v} controls={true} width="800px" />
            ))
          : null}
      </>
    )
  }

  if (!gallery)
    return (
      <MUIImageList>
        <MUIImageListItem>
          <img
            src={`/assets/backgrounds/noGallery.jpg`}
            key={"noGallery"}
            alt={"noGallery"}
          />
        </MUIImageListItem>
      </MUIImageList>
    )
}

const ImageList = styled(MUIImageList)`
  grid-template-columns: repeat(3, 1fr) !important;
`

const ImageListItem = styled(MUIImageListItem)`
  margin: 0 !important;

  img {
    cursor: pointer;
  }
`

export default YachtGallery
