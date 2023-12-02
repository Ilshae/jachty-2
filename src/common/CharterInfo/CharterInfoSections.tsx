import { ReactNode } from "react"
import {
  GeneralDescription,
  DiscountDescription,
  ReservationDescription,
  AdditionalPricesDescription,
  DcoumentsDescription,
} from "./CharterInfoDescriptions.tsx"

export type SectionType = {
  name: string
  description: string | ReactNode
}

export const charterInfoSections: SectionType[] = [
  {
    name: "Dokumenty do pobrania",
    description: <DcoumentsDescription />,
  },
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
