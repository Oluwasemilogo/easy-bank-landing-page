import React from "react";

function ArticlesCard(props) {
  return (
    <>
      <li className="articles_item">
        <img src={props.src} alt="articleImage" className="articleImg" />
        <div className="content_wrapper">
          <h5 className="articles_author">{props.author}</h5>
          <h3 className="articles_name">{props.name}</h3>
          <p className="articles_description">{props.description}</p>
        </div>
      </li>
    </>
  );
}

export default ArticlesCard;
