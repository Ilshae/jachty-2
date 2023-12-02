import { Yacht } from "../../data/yachts.ts"
import { FC } from "react"

const YachtEquipment: FC<{ equipment: Yacht["equipment"] }> = ({
  equipment,
}) => {
  const { basic, galleyAndMess, powerAndMultimedia, other } = equipment

  return (
    <div>
      <List title={"Podstawowe wyposażenie żeglarskie"} items={basic} />
      <List title={"Kambuz i mesa"} items={galleyAndMess} />
      <List title={"Zasilanie i multimedia"} items={powerAndMultimedia} />
      <List title={"Pozostałe"} items={other} />
    </div>
  )
}

const List: FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <>
    <h4>{title}</h4>
    <ul>
      {items.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
  </>
)

export default YachtEquipment
