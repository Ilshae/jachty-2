import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../theme.ts"

type OpenMenu = {
  state: "open"
  screen: "mobile" | "desktop"
}
type ClosedMenu = {
  state: "closed"
}
export type MenuState = OpenMenu | ClosedMenu

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 10px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: 5px;
  }

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`
