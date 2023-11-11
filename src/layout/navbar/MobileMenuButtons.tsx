import styled from "styled-components"
import { device } from "../../theme.ts"
import { MenuState } from "./Navbar.tsx"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Dispatch, FC } from "react"

export const HamburgerButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <OpenMenu
    $menuState={menuState}
    onClick={() => setMenuState({ state: "open", screen: "mobile" })}
  >
    <MenuIcon />
  </OpenMenu>
)

export const CloseButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <CloseMenu
    $menuState={menuState}
    onClick={() => setMenuState({ state: "closed" })}
  >
    <CloseIcon />
  </CloseMenu>
)

const OpenMenu = styled.div<{
  $menuState: MenuState
}>`
  display: none;
  cursor: pointer;
  justify-self: flex-end;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "none"
        : "block"};
  }
`
const CloseMenu = styled.li<{
  $menuState: MenuState
}>`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 0;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "block"
        : "none"};
  }
`
