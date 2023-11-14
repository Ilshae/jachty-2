import styled from "styled-components"
import { device, theme } from "../../theme.ts"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Dispatch, FC } from "react"
import { MenuState } from "./common.ts"

export const HamburgerButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <OpenMenu
    data-cy={"open-menu"}
    $menuState={menuState}
    onClick={() => setMenuState({ state: "open", screen: "mobile" })}
  >
    <MenuIcon sx={{ stroke: theme.color.light, strokeWidth: 1 }} />
  </OpenMenu>
)

export const CloseButton: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <CloseMenu
    data-cy={"close-menu"}
    $menuState={menuState}
    onClick={() => setMenuState({ state: "closed" })}
  >
    <CloseIcon sx={{ stroke: theme.color.light, strokeWidth: 1 }} />
  </CloseMenu>
)

const OpenMenu = styled.div<{
  $menuState: MenuState
}>`
  display: none;
  cursor: pointer;
  justify-self: flex-end;
  color: ${({ theme }) => theme.color.light};
  margin-top: 5px;

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
  right: 26px;
  top: 5px;
  color: ${({ theme }) => theme.color.light};

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "block"
        : "none"};
  }
`
