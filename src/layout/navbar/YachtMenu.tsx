import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import YachtList from "./YachtList.tsx"
import { MenuState } from "./Navbar.tsx"
import styled from "styled-components"
import { device } from "../../theme.ts"
import { Dispatch, FC, useState } from "react"

export const YachtMenu: FC<{
  menuState: MenuState
  setMenuState: Dispatch<MenuState>
}> = ({ menuState, setMenuState }) => {
  const [mobileYachtListOpen, setMobileYachtListOpen] = useState(false)

  return (
    <Wrapper onMouseLeave={() => setMenuState({ state: "closed" })}>
      <DesktopYachtList
        onMouseOver={() => setMenuState({ state: "open", screen: "desktop" })}
      >
        Jachty Żaglowe <KeyboardArrowDownIcon />
      </DesktopYachtList>
      <MobileYachtList $menuState={menuState}>
        <MobileYachtButton
          onClick={() => {
            setMobileYachtListOpen(!mobileYachtListOpen)
          }}
        >
          Jachty Żaglowe
        </MobileYachtButton>
      </MobileYachtList>
      <MegaBox
        $menuState={menuState}
        $mobileYachtListOpen={mobileYachtListOpen}
      >
        <YachtList setMenuState={setMenuState} />
      </MegaBox>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  list-style: none;
`

const DesktopYachtList = styled.span`
  list-style: none;
  padding: 0 16px;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`

const MobileYachtList = styled.li<{
  $menuState: MenuState
}>`
  display: none;
  height: 60px;
  list-style: none;
  margin: 16px 10px;
  text-align: center;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "block"
        : "none"};
  }
`

const MobileYachtButton = styled.button`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.action};
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`

const MegaBox = styled.div<{
  $menuState: MenuState
  $mobileYachtListOpen: boolean
}>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  display: ${({ $menuState }) =>
    $menuState.state === "open" ? "block" : "none"};

  @media ${device.tablet} {
    position: static;
    top: 65px;
    display: ${({ $mobileYachtListOpen }) =>
      $mobileYachtListOpen ? "block" : "none"};
  }
`

export default YachtMenu
