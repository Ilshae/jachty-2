import { FC, ReactNode } from "react"
import str from "../../data/footer.json"
import styled from "styled-components"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"
import PhoneIcon from "@mui/icons-material/Phone"
import { Link } from "react-router-dom"
import { device } from "../../theme.ts"

const Footer: FC = () => {
  return (
    <Background>
      <Container>
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
            <CompanyLink to="/">
              <img src={"/assets/logos/logo-non-transparent.svg"} alt="logo" />
            </CompanyLink>
            <CompanyLink to="/">Jachty Pruszyński</CompanyLink>
          </CopyrightSection>
          <CopyrightSection>
            <AuthorLink
              href="https://ilshae.github.io/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              &copy; Ingrid Pruszyńska 2020
            </AuthorLink>
          </CopyrightSection>
        </CopyrightWrapper>
      </Container>
    </Background>
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

const Background = styled.footer`
  background-image: url("/assets/backgrounds/background2.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100%;
  text-shadow: ${({ theme }) => theme.shadow.text};
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  padding: 16px;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-family: ${({ theme }) => theme.font.action};
  width: 100%;
  max-width: 1700px;

  @media ${device.desktop} {
    max-width: 1340px;
  }
  @media ${device.laptopL} {
    max-width: 924px;
  }
  @media ${device.laptop} {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSize.regular};
    margin: 0 60px;
  }
  @media ${device.tablet} {
    margin: 0 20px;
  }
  @media ${device.mobileM} {
    margin: 0 40px;
  }
`
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid black;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-of-type(2) {
    align-items: flex-end;
  }

  @media ${device.tablet} {
    &:nth-of-type(2) {
      align-items: flex-start;
    }
    width: 300px;
  }

  @media ${device.mobileM} {
    width: 100%;
    white-space: pre-wrap;
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

  @media ${device.laptop} {
    margin: 8px 0;
  }

  @media ${device.tablet} {
    margin: 12px 0;
  }

  @media ${device.tablet} {
    margin: 16px 0;
  }
`

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

const CopyrightSection = styled.div`
  display: inline-flex;
  align-items: center;
`

const AuthorLink = styled(StyledLink)`
  font-family: ${({ theme }) => theme.font.special};

  @media ${device.tablet} {
    margin-top: 30px;
  }
`

const CompanyLink = styled(Link)`
  text-decoration: none !important;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${({ theme }) => theme.font.action};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.title};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }

  img {
    width: 100px;
    height: 100px;
    margin-right: 30px;

    @media ${device.tablet} {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    @media ${device.mobileM} {
      margin-bottom: 20px;
    }
  }
`

export default Footer
