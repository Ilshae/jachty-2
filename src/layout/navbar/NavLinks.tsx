import { device } from "../../theme.ts"
import styled from "styled-components"
import { Dispatch, FC } from "react"
import { MenuState, StyledNavLink } from "./common.ts"

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
