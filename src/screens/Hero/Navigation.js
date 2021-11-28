import React from "react"
import "./Navigation.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="menudropdown1">
      <Link to="/">
        <HomeIcon className="icon" />
      </Link>

      <ul>
        <li>
          <strong>CCM Division</strong>
          <ul>Overview</ul>
          <ul>Water Works</ul>
          <ul>Sanitary Section</ul>
          <ul>Horticulture Section</ul>
          <ul>Organization Chart</ul>
          <ul>
            <Link to="/ongoing-projects">OnGoing Projects</Link>
          </ul>
          <ul>
            <Link to="/completed-project">Completed Projects</Link>
          </ul>
        </li>
        <li>
          <strong>Electrical Division</strong>
          <ul>E&M Section</ul>
          <ul>RAC Section</ul>
        </li>
        <li>
          <strong>Telephone</strong>
          <ul>Links</ul>
          <ul>Links</ul>
          <ul>Links</ul>
          <ul>Links</ul>
        </li>
        <li>
          <strong>Estate Office</strong>
          <ul>Links</ul>
        </li>
        <li>
          <strong>Contracts</strong>
          <ul>Tenders</ul>
        </li>
        <li>
          <strong>About</strong>
          <ul>
            <Link to="/about">About Us</Link>
          </ul>
        </li>
      </ul>
      <SearchIcon className="icon" />
    </div>
  )
}

export default Navigation
