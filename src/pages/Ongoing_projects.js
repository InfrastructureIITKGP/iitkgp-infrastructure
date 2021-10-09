import React from "react"
import NavHeader from "../screens/Hero/Nav_header"
import "./Ongoing_projects.css"
import Img from "../images/iit-kgp-main.jpg"
import { DateRangeOutlined } from "@material-ui/icons"
import { PermIdentity } from "@material-ui/icons"


function ongoingProjects() {
  return (
    <div className="projects">
      <NavHeader />
      <div className="ongoing_projects1">
        <img src={Img} className="img" />
        <div className="ongoing_projects-info">
          <h1>Construction of new food court at Tikka junction</h1>
          <p>
            The School and university projects page collects information about
            Wikipedia projects for school and university classes, including an
            archive of many past class projects. Lists of current classes (and
            other programs) using Wikipedia can be found at
            dashboard.wikiedu.org and outreachdashboard.wmflabs.org, as well as
            below at current projects.
          </p>
          <div className="info">
            <div>
              <PermIdentity />
              <strong>M/S Tapas Paul</strong>
            </div>
            <div>
              {/* <MonetizationOnIcon /> */}
              <strong>Rs. 6.57 Crore</strong>
            </div>
            <div>
              <DateRangeOutlined />
              <strong>7.01.2022</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="ongoing_projects2">
        <img src={Img} className="img" />
        <div className="ongoing_projects-info">
          <h1>Construction of new food court at Tikka junction</h1>
          <p>
            The School and university projects page collects information about
            Wikipedia projects for school and university classes, including an
            archive of many past class projects. Lists of current classes (and
            other programs) using Wikipedia can be found at
            dashboard.wikiedu.org and outreachdashboard.wmflabs.org, as well as
            below at current projects.
          </p>
          <div className="info">
            <div>
              {/* <PermIdentityIcon /> */}
              <strong>M/S Tapas Paul</strong>
            </div>
            <div>
              {/* <MonetizationOnIcon /> */}
              <strong>Rs. 6.57 Crore</strong>
            </div>
            <div>
              {/* <DateRangeIcon /> */}
              <strong>7.01.2022</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ongoingProjects
