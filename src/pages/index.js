import * as React from "react"
import "./index.css"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Body from "../body/body"
import Footer from "../Footer/Footer"

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default IndexPage
