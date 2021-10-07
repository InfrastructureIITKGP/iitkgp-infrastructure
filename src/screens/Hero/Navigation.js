import React from "react"
import "./Navigation.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "gatsby"

function navigation() {
  return (
    <div className="menudropdown1">
      <Link to="/">
        <HomeIcon className="icon" />
      </Link>

      <ul>
        <li>
          CCM Division
          <ul>
            <Link to="/Ongoing_projects">Ongoing projects</Link>
          </ul>
          <ul>Organization Chart</ul>
          <ul>Overview</ul>
          <ul>Past Achievements</ul>
          <ul>Forms</ul>
        </li>
        <li>
          E&M Division
          <ul>On Going projects</ul>
          <ul>Links</ul>
        </li>
        <li>
          RAC Section
          <ul>Links</ul>
          <ul>Links</ul>
          <ul>Links</ul>
          <ul>Links</ul>
        </li>
        <li>
          Tenders
          <ul>Links</ul>
        </li>
        <li>
          Contracts
          <ul>Links</ul>
        </li>
        <li>
          Notices
          <ul>Links</ul>
        </li>
        <li>
          About Us
          <ul>Links</ul>
        </li>
      </ul>
      <SearchIcon className="icon" />
    </div>
  )
}

export default navigation
