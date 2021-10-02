import React from "react"
import Navigation from "./Navigation"
import Header from "../Constant/Header"
import "./Nav_header.css"

function navHeader() {
  return (
    <div className="nav">
      <Header />
      <Navigation />
    </div>
  )
}

export default navHeader
