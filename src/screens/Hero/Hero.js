import React from "react"
import "./Hero.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
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
