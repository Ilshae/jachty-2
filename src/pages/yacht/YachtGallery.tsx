import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"
import { ImageList, ImageListItem } from "@mui/material"
import ReactPlayer from "react-player"

const YachtGallery: FC<{
  gallery?: Yacht["gallery"]
  video?: Yacht["video"]
}> = ({ gallery, video }) => {
  if (gallery)
    return (
      <>
        <ImageList>
          {gallery.map((img) => (
            <ImageListItem>
              <img src={`/assets/yachts/${img}`} key={img} alt={img} />
            </ImageListItem>
          ))}
        </ImageList>
        {video
          ? video.map((v) => (
              <ReactPlayer key={v} url={v} controls={true} width="800px" />
            ))
          : null}
      </>
    )

  if (!gallery)
    return (
      <ImageList>
        <ImageListItem>
          <img
            src={`/assets/backgrounds/noGallery.jpg`}
            key={"noGallery"}
            alt={"noGallery"}
          />
        </ImageListItem>
      </ImageList>
    )
}

export default YachtGallery
