import React from "react"
import "./Hero.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"

function hero() {
  return (
    <div className="hero">
      <nav className="nav">
        <ul className="nav__ul">
          <HomeIcon className="nav__homeIcon" />
          <li className="Home">Home</li>
          <li className="E&M_division">E&M division</li>
          <li className="CCM_Division">CCM Division</li>
          <li className="RAC_Section">RAC Section</li>
          <li className="Tenders">Tenders</li>
          <li className="Contracts">Contracts</li>
          <li className="Notices">Notices</li>
          <li className="About_Us">About Us</li>
          <SearchIcon className="nav__search" />
        </ul>
      </nav>
    </div>
  )
}

export default hero
