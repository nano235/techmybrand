import React from "react";
import CardList from "./CardList";
import { Link } from "react-router-dom";

function CardContainer({ details, style1, style2, style3, hoverStyle }) {
  return (
    <div className={`feature-images-wrapper ${style3}`}>
      <div className="container">
        <CardList
          data={details}
          style1={style1}
          style2={style2}
          hoverStyle={hoverStyle}
        />
        <div className="section-under-heading text-center section-space--mt_80">
          Challenges are just opportunities in disguise.
          <Link to="/contact-us">Take the challenge!</Link>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
