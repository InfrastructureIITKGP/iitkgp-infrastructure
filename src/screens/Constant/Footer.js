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
import Data from "../../Data/data"

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
          {Data.footer.infoDiv1.map(paragraph => {
            return <p>{paragraph}</p>
          })}
        </div>
        <div className="footer__info">
          {Data.footer.infoDiv2.map(paragraph => {
            return <p>{paragraph}</p>
          })}
        </div>
        <div className="footer__info">
          {Data.footer.infoDiv3.map(paragraph => {
            return <p>{paragraph}</p>
          })}
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
