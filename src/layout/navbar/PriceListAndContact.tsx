import { device } from "../../theme.ts"
import styled from "styled-components"
import { Dispatch, FC } from "react"
import { MenuState, NavLink as Link } from "./common.ts"

export const PriceList: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <Wrapper $menuState={menuState}>
    <NavLink to="/cennik" onClick={() => setMenuState({ state: "closed" })}>
      Cennik
    </NavLink>
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
    <NavLink to="/kontakt">Kontakt</NavLink>
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

const NavLink = styled(Link)`
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }
`
