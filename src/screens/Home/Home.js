import React from "react"
import "./Home.css"
import AboutInfrastructureCard from "./AboutInfrastructureCard"
import LatestNewsCard from "./LatestNewsCard"
import ImageGrid from "./ImageGrid"
import Gallery from "./Gallery"
import Data from "../../Data/data"
import CardContent from "@material-ui/core/CardContent"
import { Grid } from "@material-ui/core"
import "bootstrap-icons/font/bootstrap-icons.css"

function Home() {
  return (
    <div className="body">
      <Grid
        justifyContent="center"
        alignItems="center"
        xs={12}
        className="card__div1"
      >
        <CardContent>
          <Grid spacing={1} container justify="center">
            <Grid item xs={3}>
              <AboutInfrastructureCard />
            </Grid>
            <Grid justifyContent="center" item xs={3}>
              <iframe
                item
                xs={4}
                width="100%"
                height="625px"
                src="https://www.youtube.com/embed/iZf1QdDA270"
                title="1"
              ></iframe>
            </Grid>
            <Grid item xs={3}>
              <LatestNewsCard
                image={Data.card__div1[0].image}
                title={Data.card__div1[0].title}
                heading={Data.card__div1[0].heading}
                paragraph={Data.card__div1[0].paragraph}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
      <div className="latest__news">
        <strong>LATEST NEWS</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-newspaper fa-10x"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
        </svg>
      </div>

      <Grid justifyContent="center" xs={12} className="card__div2">
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
