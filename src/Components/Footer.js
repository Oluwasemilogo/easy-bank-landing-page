import React from "react";
import "./Footer.css";
import logo from "../SVG/logo.svg";
import facebook from "../SVG/icon-facebook.svg";
import youtube from "../SVG/icon-youtube.svg";
import twitter from "../SVG/icon-twitter.svg";
import pinterest from "../SVG/icon-pinterest.svg";
import insta from "../SVG/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="logo_container">
        <div className="logos">
          <img src={logo} alt="" />
          {/* <h3 className="logoname">easybank</h3> */}
        </div>
        <div className="socials">
          <img src={facebook} alt="" className="facebook" />
          <img src={youtube} alt="" className="youtube" />
          <img src={twitter} alt="" className="tweet" />
          <img src={pinterest} alt="" className="pinterest" />
          <img src={insta} alt="" className="insta" />
        </div>
      </div>
      <div className="links1">
        <p>
          <a href="">About</a>
        </p>
        <p>
          <a href="">Contact Us</a>
        </p>
        <p>
          <a href="">Blog</a>
        </p>
      </div>
      <div className="links2">
        <p>
          <a href="">Careers</a>
        </p>
        <p className="support">
          <a href="">Support</a>
        </p>
        <p>
          <a href="">Private Policy</a>
        </p>
      </div>
      <div className="btnshi">
        <button className="btnrequest">Request Invite</button>
        <p className="right">Easybank.All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
