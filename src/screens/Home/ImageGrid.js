import React from "react"
import "./ImageGrid.css"
import Data from "../../Data/data"
import CardContent from "@material-ui/core/CardContent"
import { CardActionArea, Grid, Tooltip } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

function imgGrid(props) {
  const gallaryPictures = props.section1 ? Data.galleryData1 : Data.galleryData2

  return (
    <Grid justifyContent="center" xs={12} className="grid">
      <CardContent>
        <Grid spacing={1} container justify="center" className="img__grid">
          {gallaryPictures.map(items => {
            return (
              <Grid item xs={3}>
                <CardActionArea>
                  <Link
                    to={items.text == "Projects" ? "/completed-project" : "/"}
                  >
                    <div className="img__grid-img">
                      <img src={items.image} alt="" />
                      <Button variant="contained" size="large" color="primary">
                        {items.text}
                      </Button>
                    </div>
                  </Link>
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
