import styled from "styled-components"
import { device } from "../../theme.ts"
import yachts, { Yacht } from "../../data/yachts.ts"
import { Dispatch, FC } from "react"
import { MenuState, NavLink } from "./common.ts"

export const YachtList: FC<{
  setMenuState: Dispatch<MenuState>
}> = ({ setMenuState }) => {
  const getYachtsLinks = (yachts: Yacht[]) =>
    yachts.map((yacht: Yacht) => (
      <Element key={yacht.id}>
        <NavLink
          key={yacht.id}
          to={yacht.url}
          onClick={() => setMenuState({ state: "closed" })}
        >
          {yacht.id}
        </NavLink>
      </Element>
    ))

  const getYachtsBelow8m = () => {
    const idList = [
      "Twister 800N Harpia",
      "Twister 800N Strzyga",
      "Aquatic 25T Morrigan",
      "Antila 24.4 Borneo",
      "Phobos 25 Saskia",
    ]

    return yachts.filter(({ id }) => idList.includes(id))
  }

  const getYachtsAbove8m = () => {
    const idList = [
      "Antila 27 Biały Wilk",
      "Antila 33.3 Przygoda",
      "Antila 27 Skellige",
      "Antila 26CC Solaris",
      "Antila 26CC Driada",
      "Antila 28.2 Galapagos",
      "Antila 27 Aldonika",
    ]

    return yachts.filter(({ id }) => idList.includes(id))
  }

  const getYachtsNew = () => {
    const idList = [
      "Phobos 25 Saskia",
      "Antila 26CC Driada",
      "Antila 27 Skellige",
      "Antila 27 Aldonika",
      "Antila 28.2 Galapagos",
      "Twister 800N Strzyga",
    ]

    return yachts.filter(({ id }) => idList.includes(id))
  }

  return (
    <Wrapper>
      <Column>
        <Header>Jachty do 8 m</Header>
        <List>{getYachtsLinks(getYachtsBelow8m())}</List>
      </Column>
      <Column>
        <Header>Jachty od 8 m</Header>
        <List>{getYachtsLinks(getYachtsAbove8m())}</List>
      </Column>
      <Column>
        <Header>Rocznik 2022-2024</Header>
        <List>{getYachtsLinks(getYachtsNew())}</List>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary75};
  padding: 25px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);

  @media ${device.tablet} {
    box-shadow: none;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 0;
    background-color: inherit;
  }
`

const Column = styled.div`
  line-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  text-align: center;

  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.6);

    &:nth-child(3) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }
  }
`
const Header = styled.header`
  padding: 0 20px;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fontFamily.special};
  color: ${({ theme }) => theme.color.light};

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`

const List = styled.ul`
  line-height: 38px;
  padding-left: 0 !important;

  @media ${device.tablet} {
    border-left: 0px;
    padding-left: 16px;
  }
`

const Element = styled.li`
  list-style: none;
  margin: 16px 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.subTitle};

  @media ${device.laptopL} {
    margin: 12px 8px;
  }

  @media ${device.tablet} {
    margin: 16px 8px;
  }
`

export default YachtList
