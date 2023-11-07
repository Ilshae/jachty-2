import { FC, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

const Home = lazy(() => import("./pages/home/Home.tsx"))
const Footer = lazy(() => import("./layout/footer/Footer.tsx"))

const App: FC = () => {
  return (
    // <ErrorBoundary>
    //     <Suspense fallback={<Loading />}>
    //         <Navbar />
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
    // </Suspense>
    // </ErrorBoundary>
  )
}

export default App
