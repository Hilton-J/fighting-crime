import { Outlet } from "react-router-dom"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout