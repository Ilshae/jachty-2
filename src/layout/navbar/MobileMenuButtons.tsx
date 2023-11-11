import styled from "styled-components"
import { device } from "../../theme.ts"
import { MenuState } from "./Navbar.tsx"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Dispatch, FC } from "react"

export const OpenMobileMenuButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <OpenMobileMenu
    $menuState={menuState}
    onClick={() => setMenuState({ state: "open", screen: "mobile" })}
  >
    <MenuIcon />
  </OpenMobileMenu>
)

export const CloseMobileMenuButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <CloseMobileMenu
    $menuState={menuState}
    onClick={() => setMenuState({ state: "closed" })}
  >
    <CloseIcon />
  </CloseMobileMenu>
)

const OpenMobileMenu = styled.div<{
  $menuState: MenuState
}>`
  display: none;
  cursor: pointer;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" ? "none" : "block"};
  }
`
const CloseMobileMenu = styled.li<{
  $menuState: MenuState
}>`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 5px;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" ? "none" : "block"};
  }
`
