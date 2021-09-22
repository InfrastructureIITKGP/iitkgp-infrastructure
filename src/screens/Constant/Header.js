import React from "react"
import "../Constant/Header.css"
import iitLogo from "../../images/iit-kgp-logo2.png"
import CloudIcon from "@material-ui/icons/Cloud"

function Header() {
  return (
    <div className="header">
      <div className="header__iit-logo">
        <div className="iit__logo-name">
          <p>INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR</p>
          <p>भारतीय प्रौद्योगिकी संस्थान खड़गपुर</p>
        </div>
        <img src={iitLogo} />
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
