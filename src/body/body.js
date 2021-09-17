import React from "react"
import "./body.css"
import Card1 from "../body/card1"
import Card2 from "../body/card2"
import ImgGrid from "./img-grid"
import Gallery from "./gallery"
import Data from "../Data/data"

function body() {
  return (
    <div className="body">
      <div className="body__card-div1">
        <Card1 />
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="1"
        ></iframe>
        <Card2
          mage=""
          title="Lizar"
          heading="Lizard"
          paragraph="Institute Works was formed by integrating various estate works sections - CCM (Civil Construction & Maintenance), E&M (Electrical & Mechanical works). "
        />
      </div>
      <div className="body__card-div2">
        {Data.card__div2.map(items => {
          return (
            <Card2
              image={items.image}
              title={items.title}
              heading={items.heading}
              paragraph={items.paragraph}
            />
          )
        })}
      </div>
      <ImgGrid />
      <Gallery />
    </div>
  )
}

export default body
