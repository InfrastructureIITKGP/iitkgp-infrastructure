import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import IitKgp from "../images/iit-kgp-logo2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__div-1">
        <div className="footer__logo">
          <img src={IitKgp} />
        </div>
        <div className="footer__info">
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
        </div>
        <div className="footer__info">
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
        </div>
        <div className="footer__info">
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
          <p>Technlogy incubation center</p>
        </div>
      </div>
      <div className="footer__div-2">
        <div className="footer__div-2-logo">
          <Button>
            <FacebookIcon />
          </Button>
          <Button>
            <TwitterIcon />
          </Button>
          <Button>
            <LinkedInIcon />
          </Button>
          <Button>
            <InstagramIcon />
          </Button>
          <Button>
            <YouTubeIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
