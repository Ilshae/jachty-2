import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import styled from "styled-components"
import CloseIcon from "@mui/icons-material/Close"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  return (
    <>
      <CompanyName>
        <Link to="/">Jachty Pruszyński</Link>
      </CompanyName>
      <OpenMobileMenu
        onClick={() => setOpen(true)}
        className={`btn menu-btn ${open ? "menu-btn-checked" : ""}`}
      >
        <MenuIcon />
      </OpenMobileMenu>
      <NavLinks>
        <CloseMobileMenu
          onClick={() => setOpen(false)}
          className={`btn close-btn ${!open ? "close-btn-checked" : ""}`}
        >
          <CloseIcon />
        </CloseMobileMenu>
        <BigDesktopMenu
          onMouseLeave={() =>
            document
              .getElementById("mega-box")!
              .classList.remove("mega-box-hover")
          }
        >
          <DesktopYachtList
            onMouseOver={() =>
              document
                .getElementById("mega-box")!
                .classList.add("mega-box-hover")
            }
          >
            Jachty Żaglowe <KeyboardArrowDownIcon />
          </DesktopYachtList>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">
            Jachty Żaglowe
          </label>
          <MegaBox id={"mega-box"}>
            <MegaBoxContent>
              <MegaBoxColumn>
                <header>Jachty do 8 m</header>
              </MegaBoxColumn>
              <MegaBoxColumn>
                <header>Jachty od 8 m</header>
              </MegaBoxColumn>
              <MegaBoxColumn>
                <header>Rocznik 2023-2024</header>
              </MegaBoxColumn>
            </MegaBoxContent>
          </MegaBox>
        </BigDesktopMenu>
        <PriceList>
          <NavLink
            to="/cennik"
            onClick={() => (
              setOpen(false),
              document
                .getElementById("mega-box")!
                .classList.remove("mega-box-hover")
            )}
          >
            Cennik
          </NavLink>
        </PriceList>
        <Contact>
          <NavLink
            to="/kontakt"
            onClick={() => (
              setOpen(false),
              document
                .getElementById("mega-box")!
                .classList.remove("mega-box-hover")
            )}
          >
            Kontakt
          </NavLink>
        </Contact>
      </NavLinks>
    </>
  )
}

const CompanyName = styled.div``

const OpenMobileMenu = styled.div``

const NavLinks = styled.ul``

const CloseMobileMenu = styled.li``

const BigDesktopMenu = styled.li``

const DesktopYachtList = styled.span``

const MegaBox = styled.div``

const MegaBoxContent = styled.div``

const MegaBoxColumn = styled.div``

const PriceList = styled.li``

const Contact = styled.li``

export default Navbar
