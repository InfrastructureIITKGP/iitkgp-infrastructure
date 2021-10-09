import React from "react"
import "./Navigation.css"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"

function navigation() {
  return (
    <div className="menudropdown1">
      <HomeIcon className="icon" />
      <ul>
        <li>
          CCM Division
          <ul></ul>
        </li>
        <li>
          E&M Division
          <ul>On Going projects</ul>
          <ul>
            Links
            <li>Sub Links</li>
          </ul>
        </li>
        <li>
          RAC Section
          <ul>Links</ul>
          <ul>Links</ul>
          <ul>
            Links
            <li>Sub Links</li>
          </ul>
          <ul>
            Links
            <li>Sub Links</li>
          </ul>
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
