import { FC, ReactNode } from "react"
import str from "../../data/footer.json"
import styled from "styled-components"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"
import PhoneIcon from "@mui/icons-material/Phone"
import { Link } from "react-router-dom"

const Footer: FC = () => {
  return (
    <Wrapper>
      <ContactWrapper>
        <ContactSection>
          <IconLink
            href={str.address_url}
            icon={<LocationOnIcon />}
            text={str.address}
          />
          <IconLink
            href={`mailto:${str.email}`}
            icon={<EmailIcon />}
            text={str.email}
          />
        </ContactSection>
        <ContactSection>
          <IconLink
            href={`tel:${str.phone2}`}
            icon={<PhoneIcon />}
            text={str.phone}
          />
          <IconLink
            href={`https://www.${str.fb}`}
            icon={<FacebookIcon />}
            text={str.fb}
          />
        </ContactSection>
      </ContactWrapper>
      <CopyrightWrapper>
        <CopyrightSection>
          <Link to="/">
            <img src={"/assets/logos/logo-non-transparent.svg"} alt="logo" />
          </Link>
          <Link to="/">
            <h2>Jachty Pruszyński</h2>
          </Link>
        </CopyrightSection>
        <ContactSection>
          <h2>
            <AuthorLink
              href="https://ilshae.github.io/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              &copy; Ingrid Pruszyńska 2020
            </AuthorLink>
          </h2>
        </ContactSection>
      </CopyrightWrapper>
    </Wrapper>
  )
}

const IconLink: FC<{ href: string; icon: ReactNode; text: string }> = ({
  href,
  icon,
  text,
}) => {
  return (
    <StyledLink href={href} rel="nofollow noopener noreferrer" target="_blank">
      {icon}
      <span style={{ marginLeft: "8px" }}>{text}</span>
    </StyledLink>
  )
}

const Wrapper = styled.footer`
  background-image: url("/assets/backgrounds/background2.jpg");
  background-size: cover;
  background-position: center;
  height: 250px;
  text-shadow: ${({ theme }) => theme.shadow.text};
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  position: relative;
  z-index: 2;
  padding: 16px;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-family: ${({ theme }) => theme.font.action};
`

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid black;
  width: 100%;
`

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-of-type(2) {
    align-items: flex-end;
  }
`

const StyledLink = styled.a`
  text-decoration: none !important;
  color: inherit;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
`

const CopyrightSection = styled.div``

const AuthorLink = styled(StyledLink)`
  //font-family: ${({ theme }) => theme.font.special};
  font-family: "Courgette", cursive;
`

export default Footer
