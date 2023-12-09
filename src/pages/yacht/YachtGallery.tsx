import { Yacht } from "../../data/yachts.ts"
import { FC, useState } from "react"
import {
  ImageList as MUIImageList,
  ImageListItem as MUIImageListItem,
} from "@mui/material"
import ReactPlayer from "react-player"
import styled from "styled-components"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const YachtGallery: FC<{
  gallery?: Yacht["gallery"]
  video?: Yacht["video"]
}> = ({ gallery, video }) => {
  const [galleryState, setGalleryState] = useState<{
    photoIndex: number
    isOpen: boolean
  }>({ photoIndex: 0, isOpen: false })

  const { photoIndex, isOpen } = galleryState

  if (gallery) {
    const galleryUrls = gallery?.map((i) => ({
      src: `/assets/yachts/${i}`,
    }))

    return (
      <>
        <ImageList>
          {gallery.map((img, index) => (
            <ImageListItem>
              <img
                src={`/assets/yachts/${img}`}
                key={img}
                alt={img}
                onClick={() =>
                  setGalleryState({ photoIndex: index, isOpen: true })
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        {isOpen ? (
          <Lightbox
            open={isOpen}
            close={() => setGalleryState({ photoIndex: 0, isOpen: false })}
            index={photoIndex}
            slides={galleryUrls}
          />
        ) : null}
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
