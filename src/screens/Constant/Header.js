import React from "react"
import "../Constant/Header.css"
import iitLogo from "../../images/iit-kgp-logo2.png"
import CloudIcon from "@material-ui/icons/Cloud"

function Header() {
  return (
    <div className="header">
      <div className="header__iit-logo">
        <img src={iitLogo} />
        <div className="iit__logo-name">
          <strong className="change-content"></strong>
        </div>
      </div>
      <div className="infrastructure__works">
        <h2>INFRASTRUCTURE WORKS</h2>
      </div>

      <div className="header__weather">
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
