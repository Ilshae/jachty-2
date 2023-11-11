import { useState } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"
import Company from "./Company.tsx"
import { HamburgerButton, CloseButton } from "./MobileMenuButtons.tsx"
import { Contact, PriceList } from "./NavLinks.tsx"
import YachtMenu from "./YachtMenu.tsx"

const Navbar = () => {
  const [menuState, setMenuState] = useState<MenuState>({ state: "closed" })

  menuState.state === "open" && menuState.screen === "mobile"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  return (
    <Nav>
      <Container>
        <Company />
        <HamburgerButton menuState={menuState} setMenuState={setMenuState} />
        <NavLinks $menuState={menuState}>
          <CloseButton menuState={menuState} setMenuState={setMenuState} />
          <YachtMenu menuState={menuState} setMenuState={setMenuState} />
          <PriceList menuState={menuState} setMenuState={setMenuState} />
          <Contact menuState={menuState} setMenuState={setMenuState} />
        </NavLinks>
      </Container>
    </Nav>
  )
}

type OpenMenu = {
  state: "open"
  screen: "mobile" | "desktop"
}
type ClosedMenu = {
  state: "closed"
}

export type MenuState = OpenMenu | ClosedMenu

const Nav = styled.nav`
  height: 60px;
  line-height: 60px;
  position: sticky;
  z-index: 99;
  background-color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow.box};
  -webkit-box-shadow: ${({ theme }) => theme.shadow.box};
  font-family: ${({ theme }) => theme.fontFamily.action};
  font-size: ${({ theme }) => theme.fontSize.title};
`

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`

const NavLinks = styled.ul<{
  $menuState: MenuState
}>`
  display: inline-flex;
  height: 60px;
  padding: 0;
  margin: 0;
  // TODO: should this be here?
  animation: fadein 0.2s;
  right: 0;

  @media ${device.tablet} {
    display: ${({ $menuState }) =>
      $menuState.state === "open" && $menuState.screen === "mobile"
        ? "block"
        : "none"};
    padding-top: 60px;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.primary75};
    overflow-y: scroll;
    box-shadow: ${({ theme }) => theme.shadow.box};
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
`

export default Navbar
