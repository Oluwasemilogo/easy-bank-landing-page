import React from "react";
import "./Onboard.css";
import planebg from "../SVG/bg-intro-desktop.svg";
import mockup from "../SVG/image-mockups.png";

function Onboard() {
  return (
    <div className="onboard">
      <img src={planebg} alt="" className="plane" />
      <div className="onboard_txt">
        <h1 className="onboard_txt_header">Next Generation digital Banking</h1>
        <p className="onboard_txt_description">
          Take your financial life online.Your Easybank account will be a
          one-stop-shop for spending,saving,budgeting,investing,and much more.
        </p>
        <button className="onboard_txt_btn">Request Invite</button>
      </div>
      <div className="onboard_img">
        {/* <img src={planebg} alt="" className="plane" /> */}
        <img src={mockup} alt="" className="mockups" />
      </div>
    </div>
  );
}

export default Onboard;
