import React from "react"
import "./Footer.css"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import IITKgp from "../../images/iit-kgp-logo2.png"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneIcon from "@material-ui/icons/Phone"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__div-1">
        <div className="footer__logo">
          <img src={IITKgp} alt="" />
          <div className="institute-name">
            <p>Indian Institute of Technology</p>
            <p>Kharagpur, West Bengal 721302</p>
          </div>
          <div>
            <div className="phone">
              <PhoneIcon />
              <p>+91-000-0000000</p>
            </div>
            <div className="mail">
              <MailOutlineIcon />
              <p>some.example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <p>Technlogy incubation center</p>
          <p>RuTAG-NE</p>
          <p>Green Energy Initiative</p>
          <p>EICT Academy</p>
          <p>Quality Improvement Programme</p>
          <p>TePP Outreach cum Cluster</p>
          <p>I-Stem</p>
        </div>
        <div className="footer__info">
          <p>Academic Afairs</p>
          <p>Student's Affairs</p>
          <p>Research Park</p>
          <p>Adult & Annual Reports</p>
          <p>Convocation Speeches</p>
          <p>IIT Council Portal</p>
        </div>
        <div className="footer__info">
          <p>Right To Information</p>
          <p>Citizen Centric Administration</p>
          <p>Anti-Ragging Affidavits</p>
          <p>Internal Complaints Committee</p>
          <p>Equal opportunity Cum Special Reservation Cell</p>
          <p>Relephone Directory</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer__div-2">
        <div className="footer__div-2-logo">
          <FacebookIcon />

          <TwitterIcon />

          <LinkedInIcon />

          <InstagramIcon />

          <YouTubeIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer
