import { FC, ReactNode } from "react"
import str from "../../data/footer.json"
import styled from "styled-components"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"
import PhoneIcon from "@mui/icons-material/Phone"
import { Link as RRDLink } from "react-router-dom"
import { device } from "../../theme.ts"
import { CommonContainer } from "../../common/styles.ts"

const Footer: FC = () => {
  return (
    <Wrapper>
      <Background>
        <FooterContainer>
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
                <img src={"/assets/logos/logo.png"} alt="logo" />
              </CompanyLink>
              <CompanyLink to="/">Jachty Pruszyński</CompanyLink>
            </CopyrightSection>
            <CopyrightSection>
              <AuthorLink
                href={str.portfolio}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &copy; Ingrid Pruszyńska 2020
              </AuthorLink>
            </CopyrightSection>
          </CopyrightWrapper>
        </FooterContainer>
      </Background>
    </Wrapper>
  )
}

const IconLink: FC<{ href: string; icon: ReactNode; text: string }> = ({
  href,
  icon,
  text,
}) => {
  return (
    <Link href={href} rel="nofollow noopener noreferrer" target="_blank">
      {icon}
      <Text>{text}</Text>
    </Link>
  )
}

const Wrapper = styled.div`
  margin-top: auto;
`

const Background = styled.footer`
  background-image: url("/assets/backgrounds/background2.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  border-top: 1px solid grey;
`

const FooterContainer = styled(CommonContainer)`
  height: 100%;
  width: 100%;
  text-shadow: ${({ theme }) => theme.shadow.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  padding: 16px;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-family: ${({ theme }) => theme.fontFamily.action};

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.regular};
    padding: 0;
  }
`
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 12px;
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
      align-items: center;
    }
    align-items: center;
    width: 300px;
  }

  @media ${device.mobileM} {
    width: 100%;
    white-space: pre-wrap;
  }
`

const Link = styled.a`
  text-decoration: none !important;
  color: inherit;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media ${device.laptop} {
    margin: 8px 0;
  }

  @media ${device.tablet} {
    margin: 12px 0;
  }

  @media ${device.mobileL} {
    margin: 8px 0;
  }
`

const Text = styled.span`
  margin-left: 8px;
  text-align: center;
  width: min-content;
  white-space: nowrap;

  @media (max-width: 340px) {
    width: 100%;
    white-space: normal;
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
    padding: 10px;
  }
`

const CopyrightSection = styled.div`
  display: inline-flex;
  align-items: center;

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }
`

const AuthorLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.special};

  @media ${device.tablet} {
    margin: 30px 0 15px 0;
  }
`

const CompanyLink = styled(RRDLink)`
  text-decoration: none !important;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.action};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.title};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media ${device.tablet} {
    flex-direction: column;
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

    @media ${device.mobileL} {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    @media ${device.mobileM} {
      margin-bottom: 10px;
    }
  }
`

export default Footer
