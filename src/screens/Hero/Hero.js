import React from "react"
import "./Hero.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"

function hero() {
  return (
    <div className="hero">
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__Home">
            <HomeIcon />
          </li>
          <li className="nav__Admissions">Admissions</li>
          <li className="nav__For-Study">For Study</li>
          <li className="nav__Research">Research</li>
          <li className="nav__Alumni">Alumni</li>
          <li className="nav__SearchIcon">
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default hero
