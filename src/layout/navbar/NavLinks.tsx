import { device } from "../../theme.ts"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Dispatch, FC } from "react"
import { MenuState } from "./Navbar.tsx"

export const PriceList: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <Wrapper $menuState={menuState}>
    <StyledNavLink
      to="/cennik"
      onClick={() => setMenuState({ state: "closed" })}
    >
      Cennik
    </StyledNavLink>
  </Wrapper>
)

export const Contact: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <Wrapper
    $menuState={menuState}
    onClick={() => setMenuState({ state: "closed" })}
  >
    <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
  </Wrapper>
)

const Wrapper = styled.li<{
  $menuState: MenuState
}>`
  list-style: none;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "block"
        : "none"};
    margin: 16px 10px;
    text-align: center;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 10px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.dark};
    border-radius: 5px;
  }
`
