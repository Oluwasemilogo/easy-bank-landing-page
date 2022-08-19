import React from "react";
import "./Articles.css";
import ArticlesCard from "./ArticlesCard";
import currency from "../SVG/image-currency.jpg";
import eatery from "../SVG/image-restaurant.jpg";
import plane from "../SVG/image-plane.jpg";
import confetti from "../SVG/image-confetti.jpg";

function Articles() {
  return (
    <div className="articles">
      <h1 className="articles_header">Latest Articles</h1>
      <div className="artcicles_container">
        <ul className="articles_items">
          <ArticlesCard
            src={currency}
            author="By Claire Robinson"
            name="Receive money in any currency with no fees"
            description="The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money 
                in a single..."
          />
          <ArticlesCard
            src={eatery}
            author="By Wilson Hutton"
            name="Treat yourself without worrying about money"
            description="Our simple budgeting feature allows you to separate out your spending
            and set realistic limits each month.That means you..."
          />
          <ArticlesCard
            src={plane}
            author="By Wilson Hutton"
            name="Take your Easybank card whereever you go"
            description="We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're abroad.
            We'll even show you..."
          />
          <ArticlesCard
            src={confetti}
            author="By Claire Robinson"
            name="Our invite-only Beta accounts are now live!"
            description="After a lot of hard work by the whole team,We're excited to launch our closed beta.
            It's easy to request an invite through the site..."
          />
        </ul>
      </div>
    </div>
  );
}

export default Articles;
