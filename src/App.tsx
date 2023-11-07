import { FC, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "./theme.ts"

const Home = lazy(() => import("./pages/home/Home.tsx"))
const Footer = lazy(() => import("./layout/footer/Footer.tsx"))

const App: FC = () => {
  return (
    // <ErrorBoundary>
    //     <Suspense fallback={<Loading />}>
    //         <Navbar />

    <ThemeProvider theme={theme}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Wrapper>
    </ThemeProvider>

    // </Suspense>
    // </ErrorBoundary>
  )
}

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  line-height: 1.7;
  background-color: ${({ theme }) => theme.colors.light};
  background-image: url("/assets/backgrounds/anchor1.png"),
    url("/assets/backgrounds/anchor1.png");
  background-size: 300px 300px;
  background-position:
    0 0,
    150px 150px;
`

export default App
