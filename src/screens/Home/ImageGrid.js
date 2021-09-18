import React from "react"
import "./ImageGrid.css"
import Data from "../../Data/data"
import CardContent from "@material-ui/core/CardContent"
import { CardActionArea, Grid, Tooltip } from "@material-ui/core"
import Button from "@material-ui/core/Button"

function imgGrid(props) {
  const gallaryPictures = props.section1 ? Data.galleryData1 : Data.galleryData2

  return (
    <Grid justifyContent="center" xs={12}>
      <CardContent>
        <Grid spacing={1} container justify="center">
          {gallaryPictures.map(items => {
            return (
              <Grid item xs={3}>
                <CardActionArea>
                  <div className="img__grid-img">
                    <img src={items.image} alt="" />
                    <Button variant="contained" size="large" color="primary">
                      {items.text}
                    </Button>
                  </div>
                </CardActionArea>
              </Grid>
            )
          })}
        </Grid>
      </CardContent>
    </Grid>
  )
}

export default imgGrid
