import { FC, lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme, device } from "./theme.ts"
import { createGlobalStyle } from "styled-components"

import ErrorBoundary from "./common/ErrorBoundary.tsx"
import Loading from "./common/Loading.tsx"

const Navbar = lazy(() => import("./layout/navbar/Navbar.tsx"))
const Footer = lazy(() => import("./layout/footer/Footer.tsx"))

const Home = lazy(() => import("./pages/home/Home.tsx"))
const PriceList = lazy(() => import("./pages/priceList/PriceList.tsx"))
const Contact = lazy(() => import("./pages/contact/Contact.tsx"))

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
          <Route
            path="/kontakt"
            element={<Contact />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/cennik"
            element={<PriceList />}
            errorElement={<ErrorBoundary />}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Suspense>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-family: ${({ theme }) => theme.fontFamily.text};
    line-height: 1.7;
    background-color: ${({ theme }) => theme.color.light};
    background-image: url("/assets/backgrounds/anchor1.png"),
    url("/assets/backgrounds/anchor1.png");
    background-size: 250px 250px;
    background-position:
            0 0,
            150px 150px;
    animation: fadein 0.2s;

    @media ${device.tablet} {
      background-size: 300px 300px;
      background-position:
              0 0,
              125px 125px;
    }

  }
`

export default App
