import { CommonContainer } from "../../common/styles.ts"
import styled from "styled-components"
import str from "../../data/footer.json"
import { FC, ReactNode } from "react"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import FacebookIcon from "@mui/icons-material/Facebook"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { device } from "../../theme.ts"

const Contact = () => {
  return (
    <>
      <Container>
        <Section>
          <h3>Możesz do nas napisać lub zadzwonić</h3>
          <IconLink
            href={`mailto:${str.email}`}
            icon={<EmailIcon />}
            text={str.email}
          />
          <IconLink
            href={`tel:${str.phone2}`}
            icon={<PhoneIcon />}
            text={str.phone}
          />
        </Section>
        <Section>
          <h3>Jesteśmy na Facebooku i Messengerze</h3>
          <IconLink
            href={`https://www.${str.fb}`}
            icon={<FacebookIcon />}
            text={str.fb}
          />
        </Section>
        <Section>
          <h3>Gdzie ta keja, a przy nie jacht?</h3>
          <IconLink
            href={str.address_url}
            icon={<LocationOnIcon />}
            text={str.address}
          />
        </Section>
      </Container>

      <Wrapper>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44629.01965325222!2d21.770680197903015!3d53.99347556531054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x846d550c071fa0d3!2sJachty%20Pruszy%C5%84ski!5e0!3m2!1spl!2spl!4v1611162386444!5m2!1spl!2spl" />
      </Wrapper>

      <HeightWrapper>
        <Background />
      </HeightWrapper>
    </>
  )
}

const IconLink: FC<{ href: string; icon: ReactNode; text: string }> = ({
  href,
  icon,
  text,
}) => {
  return (
    <div>
      <Link href={href} rel="nofollow noopener noreferrer" target="_blank">
        {icon}
        <Text>{text}</Text>
      </Link>
    </div>
  )
}

const Container = styled(CommonContainer)`
  display: flex;
  padding: 32px 0 64px 0;
  text-align: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
  }
`

const Section = styled.section`
  padding: 0 16px;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    background-color: ${({ theme }) => theme.color.light80};
  }

  @media ${device.laptop} {
    &:nth-of-type(1) {
      padding: 0 0 16px 0;
    }

    &:nth-of-type(2) {
      padding: 0 0 16px 0;
    }
  }
`

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  padding: 16px;
  font-weight: 600;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.action};
  font-size: ${({ theme }) => theme.fontSize.regular} !important;
  background-color: ${({ theme }) => theme.color.primaryLighter};
  margin: 16px 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary90} !important;
  }
`

const Text = styled.span`
  margin-left: 8px;
`

const HeightWrapper = styled.section`
  max-height: 650px;
  height: 650px;

  @media ${device.laptopL} {
    max-height: 500px;
    height: 500px;
  }
  @media ${device.laptop} {
    max-height: 350px;
    height: 350px;
  }
  @media ${device.tablet} {
    max-height: 250px;
    height: 250px;
  }
`

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/assets/backgrounds/port.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: scroll;
  display: flex;
`

const Wrapper = styled.div`
  margin-top: auto;
`

const Iframe = styled.iframe`
  width: 100%;
  border: none;
  margin-bottom: -7px;
  height: 600px;

  @media ${device.desktop} {
    height: 600px;
  }

  @media ${device.laptopL} {
    height: 500px;
  }

  @media ${device.laptop} {
    height: 400px;
  }
`

export default Contact
