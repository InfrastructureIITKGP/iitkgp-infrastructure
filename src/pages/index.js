import * as React from "react"
import "./index.css"
import Header from "../screens/Constant/Header"
import Hero from "../screens/Hero/Hero"
import Home from "../screens/Home/Home"
import Footer from "../screens/Constant/Footer"

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Home />
      <Footer />
    </div>
  )
}

export default IndexPage
