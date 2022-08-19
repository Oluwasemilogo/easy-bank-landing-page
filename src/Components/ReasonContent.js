import React from "react";

function ReasonContent(props) {
  return (
    <>
      <li className="reasoncontent_item">
        <div className="reasoncontent_item_cont">
          <img
            className="reasonconten_img"
            alt="contentImage"
            src={props.src}
          />
          <div className="reasoncontent_info">
            <h3 className="reasoncontent_text">{props.text}</h3>
            <p className="reasoncontent_description">{props.description}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default ReasonContent;
