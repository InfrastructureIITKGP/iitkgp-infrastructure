import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AboutInfrastructureData from "../../Data/AboutInfrastructure"
import CardActionArea from "@material-ui/core/CardActionArea"

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 26,
    padding: "3px",
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    minHeight: "625px",
    maxWidth: "100%",
    margin: "10px",
  },
})

export default function OutlinedCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {AboutInfrastructureData[0].heading}
      </Typography>
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            variant="h6"
            component="p"
          >
            {AboutInfrastructureData[0].details}
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
