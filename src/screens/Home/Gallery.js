import React from "react"
import "./Gallery.css"
import VideocamIcon from "@material-ui/icons/Videocam"
import ImageIcon from "@material-ui/icons/Image"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import { Grid } from "@material-ui/core"
import Data from "../../Data/data"

function gallery() {
  const gallaryImages = Data.gallaryImages
  return (
    <div className="gallery">
      <Grid container justifyContent="center" xs={12}>
        <Grid item xs={3}>
          <CardContent>
            <div className="gallery__video-icon">
              <VideocamIcon className="video" />
              <strong>Let's have a Campus Tour </strong>
            </div>
            <iframe
              width="400"
              height="500px"
              src="https://www.youtube.com/embed/iZf1QdDA270"
              title="02"
            ></iframe>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <div className="gallery__img-icon">
              <ImageIcon className="img" />
              <strong>See Our gallery </strong>
              {/* <button className="gallery__button">View All</button> */}
            </div>
            <Grid spacing={3} container justify="center">
              {gallaryImages.map(image => {
                return (
                  <Grid item xs={3}>
                    <CardActionArea>
                      <img src={image.image} className="column-img" alt="" />
                    </CardActionArea>
                  </Grid>
                )
              })}
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default gallery
