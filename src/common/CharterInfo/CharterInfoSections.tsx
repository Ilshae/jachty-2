import { ReactNode } from "react"
import {
  GeneralDescription,
  DiscountDescription,
  ReservationDescription,
  AdditionalPricesDescription,
} from "./CharterInfoDescriptions.tsx"

export type SectionType = {
  name: string
  description: string | ReactNode
}

export const charterInfoSections: SectionType[] = [
  {
    name: "Ogólne",
    description: <GeneralDescription />,
  },
  {
    name: "Rabaty",
    description: <DiscountDescription />,
  },
  {
    name: "Przebieg rezerwacji",
    description: <ReservationDescription />,
  },
  {
    name: "Dodatkowe opłaty",
    description: <AdditionalPricesDescription />,
  },
]
