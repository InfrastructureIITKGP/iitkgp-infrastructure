import React from "react"
import "./Hero.css"
import Header from "../Constant/Header"
import Navigation from "./Navigation"

function hero() {
  return (
    <div className="hero">
      <Header />
      <Navigation />
    </div>
  )
}

export default hero
