import React from "react"
import NavHeader from "../screens/Hero/Nav_header"
import "./Ongoing_projects.css"
import { DateRangeOutlined } from "@material-ui/icons"
import { PermIdentity } from "@material-ui/icons"
import { MonetizationOn } from "@material-ui/icons"
import Data from "../Data/Ongoing_projects.data"
import Footer from "../screens/Constant/Footer"

function ongoingProjects() {
  return (
    <div className="projects">
      <NavHeader />
      {Data.map(item => {
        return (
          <>
            <div className="ongoing_projects1">
              <img src={item.img1} className="img" />
              <div className="ongoing_projects-info">
                <h1>{item.title1}</h1>
                <p>{item.paragraph1}</p>
                <div className="info">
                  <div className="credits">
                    <PermIdentity />
                    <strong>{item.contractor1}</strong>
                  </div>
                  <div className="credits">
                    <MonetizationOn />
                    <strong>Rs. {item.budget1}</strong>
                  </div>
                  <div className="credits">
                    <DateRangeOutlined />
                    <strong>{item.date1}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="ongoing_projects2">
              <img src={item.img2} className="img" />
              <div className="ongoing_projects-info">
                <h1>{item.title2}</h1>
                <p>{item.paragraph2}</p>
                <div className="info">
                  <div className="credits">
                    <PermIdentity />
                    <strong>{item.contractor2}</strong>
                  </div>
                  <div className="credits">
                    <MonetizationOn />
                    <strong>Rs. {item.budget2}</strong>
                  </div>
                  <div className="credits">
                    <DateRangeOutlined />
                    <strong>{item.date2}</strong>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
      <Footer />
    </div>
  )
}

export default ongoingProjects
