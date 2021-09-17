import React from "react"
import "./img-grid.css"
import Data from "../Data/data"

function imgGrid() {
  return (
    <div className="img__grid">
      {Data.galleryData.map(items => {
        return (
          <div className="img__grid-img">
            <img src={items.image} alt="" />
            <button>{items.text}</button>
          </div>
        )
      })}
    </div>
  )
}

export default imgGrid
