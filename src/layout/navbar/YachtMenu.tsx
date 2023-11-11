import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import YachtList from "./YachtList.tsx"
import { MenuState } from "./Navbar.tsx"
import styled from "styled-components"
import { device } from "../../theme.ts"
import { Dispatch, FC } from "react"

export const YachtMenu: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => (
  <Wrapper onMouseLeave={() => setMenuState({ state: "closed" })}>
    <YachtsButton
      onMouseOver={() => setMenuState({ state: "open", screen: "desktop" })}
    >
      Jachty Żaglowe <KeyboardArrowDownIcon />
    </YachtsButton>
    <MobileYachtInput type="checkbox" id="showMega" />
    <MobileYachtList htmlFor="showMega">Jachty Żaglowe</MobileYachtList>
    <MegaBox $menuState={menuState} id={"mega-box"}>
      <YachtList />
    </MegaBox>
  </Wrapper>
)

const Wrapper = styled.li`
  list-style: none;
`

const YachtsButton = styled.span`
  list-style: none;
  padding: 0 16px;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`

const MobileYachtList = styled.label`
  display: none;
`

const MegaBox = styled.div<{
  $menuState: MenuState
}>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  display: block;
  display: ${({ $menuState }) =>
    $menuState.state === "open" ? "block" : "none"};

  #showMega:checked {
    max-height: 100%;
  }

  @media ${device.tablet} {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    max-height: 0px;
    overflow: hidden;
  }
`

const MobileYachtInput = styled.input`
  display: none;
`
export default YachtMenu
