import React from "react";
import "./gallery.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import ImageIcon from "@material-ui/icons/Image";

function gallery() {
  return (
    <div className="gallery">
      <div className="gallery__video">
        <div className="gallery__video-icon">
          <VideocamIcon className="video" />
          <strong>Let's have a Campus Tour </strong>
        </div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <div className="gallery__img"></div>
    </div>
  );
}

export default gallery;
