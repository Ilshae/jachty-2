import { device } from "../../theme.ts"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const PriceList = () => (
  <Wrapper>
    <StyledNavLink to="/cennik">Cennik</StyledNavLink>
  </Wrapper>
)

export const Contact = () => (
  <Wrapper>
    <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
  </Wrapper>
)

const Wrapper = styled.li`
  list-style: none;
  padding: 0 16px;

  @media ${device.tablet} {
    margin: 16px 10px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 10px 16px;

  &:hover {
    background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.dark};
    border-radius: 5px;
  }
`
