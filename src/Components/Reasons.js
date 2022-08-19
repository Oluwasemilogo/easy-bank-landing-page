import React from "react";
import "./Reasons.css";
import ReasonContent from "./ReasonContent";
import online from "../SVG/icon-online.svg";
import onboardimg from "../SVG/icon-onboarding.svg";
import apicon from "../SVG/icon-api.svg";
import budget from "../SVG/icon-budgeting.svg";

function Reasons() {
  return (
    <div className="reasons">
      <div className="reason_txt">
        <h1 className="reason_why">Why choose Easybank?</h1>
        <p className="reason_desc">
          We leverage Open banking to turn your bank account into your finacial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="reasons_container">
        <ul className="reasons_items">
          <ReasonContent
            src={online}
            text="Online Banking"
            description="Our modern web and mobile applications
                          allow you to keep track of your finances wherever 
                       you are in the world. "
          />
          <ReasonContent
            src={budget}
            text="Simple Budgeting"
            description=" See exactly where your money goes each month.
              Receive notifications when you're close to 
              hitting your limtits. "
          />
          <ReasonContent
            src={onboardimg}
            text="Fast Onboarding"
            description="We don't do branches, Open your account in minutes online and start taking control of your finances right away."
          />
          <ReasonContent
            src={apicon}
            text="Open Api"
            description=" Manage your savings,investments,pension,and much more from one account. 
              Tracking your money has never been easier. "
          />
        </ul>
      </div>
    </div>
  );
}

export default Reasons;
