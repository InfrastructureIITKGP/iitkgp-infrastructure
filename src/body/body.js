import React from "react";
import "./body.css";
import Card1 from "../body/card1";
import Card2 from "../body/card2";
import ImgGrid from "./img-grid";
import Gallery from "./gallery";

function body() {
  return (
    <div className="body">
      <div className="body__card1">
        <Card1 />
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <Card2 />
      </div>
      <div className="body__card2">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <ImgGrid />
      <Gallery />
    </div>
  );
}

export default body;
