import {
  AdditionalPricesDescription,
  DcoumentsDescription,
  DiscountDescription,
  GeneralDescription,
  ReservationDescription,
} from "./CharterInfoDescriptions.tsx"
import { SectionType } from "../types.ts"

export const charterInfoSections: SectionType[] = [
  {
    name: "Dokumenty do pobrania",
    description: <DcoumentsDescription />,
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
    name: "Ogólne",
    description: <GeneralDescription />,
  },
  {
    name: "Dodatkowe opłaty",
    description: <AdditionalPricesDescription />,
  },
]

export default charterInfoSections
