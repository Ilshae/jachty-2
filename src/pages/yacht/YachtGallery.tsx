import { Yacht } from "../../data/yachts.ts"
import { FC, useState } from "react"
import {
  ImageList as MUIImageList,
  ImageListItem as MUIImageListItem,
} from "@mui/material"
import ReactPlayer from "react-player"
import styled from "styled-components"
import FsLightbox from "fslightbox-react"

const YachtGallery: FC<{
  gallery?: Yacht["gallery"]
  video?: Yacht["video"]
}> = ({ gallery, video }) => {
  const [galleryState, setGalleryState] = useState<{
    photoIndex: number
    isOpen: boolean
  }>({ photoIndex: 0, isOpen: false })

  const { isOpen } = galleryState

  if (gallery) {
    const galleryUrls = gallery?.map((i) => `/assets/yachts/${i}`)

    return (
      <>
        <ImageList>
          {gallery.map((img, index) => (
            <ImageListItem key={img}>
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
        <FsLightbox toggler={isOpen} sources={galleryUrls} />
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
