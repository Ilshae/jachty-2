import { FC, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { theme, device } from "./theme.ts"
import { createGlobalStyle } from "styled-components"

const Home = lazy(() => import("./pages/Home.tsx"))
const Footer = lazy(() => import("./layout/Footer.tsx"))

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-family: ${({ theme }) => theme.font.text};
    line-height: 1.7;
    background-color: ${({ theme }) => theme.color.light};
    background-image: url("/assets/backgrounds/anchor1.png"),
    url("/assets/backgrounds/anchor1.png");
    background-size: 250px 250px;
    background-position:
            0 0,
            150px 150px;

    @media ${device.tablet} {
      background-size: 300px 300px;
      background-position:
              0 0,
              125px 125px;
    }

  }
`

const Container = styled.div`
  height: 3000px;
`

export default App
