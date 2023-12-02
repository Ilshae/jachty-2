import {
  Accordion as MUIAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { FC } from "react"

const CharterInfo = () => (
  <>
    <Accordion name={"Ogólne"} />
    <Accordion name={"Rabaty"} />
    <Accordion name={"Przebieg rezerwacji"} />
    <Accordion name={"Dodatkowe opłaty"} />
  </>
)

const Accordion: FC<{ name: string }> = ({ name }) => (
  <MUIAccordion defaultExpanded={true}>
    <AccordionHeader name={name} />
    <AccordionBody name={name} />
  </MUIAccordion>
)

const AccordionHeader: FC<{ name: string }> = ({ name }) => (
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1"
    id={name}
  >
    {name}
  </AccordionSummary>
)

const AccordionBody: FC<{ name: string }> = ({ name }) => (
  <AccordionDetails>description {name}</AccordionDetails>
)

export default CharterInfo
