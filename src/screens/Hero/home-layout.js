import React from "react"
import Footer from "../Constant/Footer"
import Header from "../Constant/Header"
import Navigation from "./Navigation"
import "./Hero.css"

const HomeLayout = props => {
  return (
    <div>
      <div className="hero">
        <Header />
        <Navigation />
      </div>
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
