import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    minHeight: "500px",
    maxWidth: "100%",
    margin: "10px",
  },
  media: {
    height: 400,
  },
})

export default function LatestNewsCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            variant="h6"
            component="p"
          >
            {props.paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}
