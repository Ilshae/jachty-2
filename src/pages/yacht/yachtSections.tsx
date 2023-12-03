import YachtTechnicalData from "./YachtTechnicalData.tsx"
import { Yacht } from "../../data/yachts.ts"
import YachtEquipment from "./YachtEquipment.tsx"
import YachtGallery from "./YachtGallery.tsx"
import CharterInfo from "../../common/CharterInfo/CharterInfo.tsx"

export const yachtSections = (yacht: Yacht) => {
  const { technicalData, equipment, gallery, video } = yacht

  return [
    {
      name: "Dane techniczne",
      description: <YachtTechnicalData technicalData={technicalData} />,
    },
    {
      name: "Wyposażenie",
      description: <YachtEquipment equipment={equipment} />,
    },
    {
      name: "Galeria",
      description: <YachtGallery gallery={gallery} video={video} />,
    },
    {
      name: "O czarterze",
      description: <CharterInfo showTitle={false} />,
    },
  ]
}

export default yachtSections
