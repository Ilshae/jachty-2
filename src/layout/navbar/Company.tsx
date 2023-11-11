import styled from "styled-components"
import { Link } from "react-router-dom"

export const Company = () => (
  <CompanyName>
    <CompanyLink to="/">Jachty Pruszyński</CompanyLink>
  </CompanyName>
)

const CompanyName = styled.div``

const CompanyLink = styled(Link)`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  font-weight: 500;
  text-decoration: none;
`

export default Company
