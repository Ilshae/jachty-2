import { useState } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"
import Company from "./Company.tsx"
import { CloseButton, HamburgerButton } from "./MobileMenuButtons.tsx"
import { Contact, PriceList } from "./PriceListAndContact.tsx"
import YachtMenu from "./YachtMenu.tsx"
import { MenuState } from "./common.ts"
import { Container } from "../../common/styles.ts"

const Navbar = () => {
  const [menuState, setMenuState] = useState<MenuState>({ state: "closed" })

  menuState.state === "open" && menuState.screen === "mobile"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  return (
    <Nav>
      <NavContainer>
        <Company />
        <HamburgerButton menuState={menuState} setMenuState={setMenuState} />
        <NavLinks $menuState={menuState}>
          <CloseButton menuState={menuState} setMenuState={setMenuState} />
          <YachtMenu menuState={menuState} setMenuState={setMenuState} />
          <PriceList menuState={menuState} setMenuState={setMenuState} />
          <Contact menuState={menuState} setMenuState={setMenuState} />
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
  height: ${({ theme }) => theme.navbar.height.desktop};
  line-height: ${({ theme }) => theme.navbar.height.desktop};
  position: sticky;
  z-index: 99;
  background-color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow.box};
  font-family: ${({ theme }) => theme.fontFamily.action};
  font-size: ${({ theme }) => theme.fontSize.title};

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }
`

const NavContainer = styled(Container)`
  position: relative;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`

const NavLinks = styled.ul<{
  $menuState: MenuState
}>`
  display: inline-flex;
  height: ${({ theme }) => theme.navbar.height.desktop};
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
    padding-top: ${({ theme }) => theme.navbar.height.desktop};
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
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.09);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.09);
    }
  }
`

export default Navbar
