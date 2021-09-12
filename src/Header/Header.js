import React from "react"
import "../Header/Header.css"
import iitLogo from "../images/IIT-KGP-logo1.gif"
import weatherLogo from "../images/weather-logo.png"
import CloudIcon from "@material-ui/icons/Cloud"

function Header() {
  return (
    <div className="header">
      <div className="header-div">
        <img src={iitLogo} />
        <CloudIcon className="weather-icon" />
        <div className="header__weather-info">
          <strong>Humidity: 70% Wind:0 km/h</strong>
          <span>31.95* C | Haze</span>
        </div>
      </div>
    </div>
  )
}

export default Header
