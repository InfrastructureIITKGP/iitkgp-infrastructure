import React from "react"
import "./Home.css"
import AboutInfrastructureCard from "./AboutInfrastructureCard"
import LatestNewsCard from "./LatestNewsCard"
import ImageGrid from "./ImageGrid"
import Gallery from "./Gallery"
import Data from "../../Data/data"
import CardContent from "@material-ui/core/CardContent"
import { Grid } from "@material-ui/core"

function Home() {
  return (
    <div className="body">
      <Grid justifyContent="center" xs={12}>
        <CardContent>
          <Grid spacing={1} container justify="center">
            <Grid item xs={3}>
              <AboutInfrastructureCard />
            </Grid>
            <Grid justifyContent="center" item xs={3}>
              <iframe
                width="450"
                height="400"
                src="https://www.youtube.com/embed/iZf1QdDA270"
                title="1"
              ></iframe>
            </Grid>
            <Grid item xs={3}>
              <LatestNewsCard
                image={Data.card__div2[1].image}
                title={Data.card__div2[1].title}
                heading={Data.card__div2[1].heading}
                paragraph={Data.card__div2[1].paragraph}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Grid>

      <Grid justifyContent="center" xs={12}>
        <CardContent>
          <Grid spacing={1} container justify="center">
            {Data.card__div2.map(items => {
              return (
                <Grid item xs={3}>
                  <LatestNewsCard
                    image={items.image}
                    title={items.title}
                    heading={items.heading}
                    paragraph={items.paragraph}
                  />
                </Grid>
              )
            })}
          </Grid>
        </CardContent>
      </Grid>

      <ImageGrid section1={true} section2={false} />
      <ImageGrid section1={false} section2={true} />
      <Gallery />
    </div>
  )
}

export default Home
