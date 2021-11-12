import React from "react"
import Footer from "../Constant/Footer"
import Header from "../Constant/Header"
import Navigation from "./Navigation"
import "./Nav_header.css"

const Layout = props => {
  return (
    <div>
      <div className="nav">
        <Header />
        <Navigation />
      </div>
      <div>{props.children}</div>
      <div style={{ height: "100px" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
