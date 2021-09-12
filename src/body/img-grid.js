import React from "react"
import "./img-grid.css"

function imgGrid() {
  return (
    <div className="grid-container">
      <div className="item1">
        <button className="button">Infrastructure</button>
      </div>
      <div className="item2">
        <button className="button">Plans</button>
      </div>
      <div className="item3">
        <button className="button">Budget</button>
      </div>
      <div className="item4">
        <button className="button">Green initiatives</button>
      </div>
      <div className="item5">
        <button className="button">Alumni</button>
      </div>
      <div className="item6">
        <button className="button">Sports</button>
      </div>
    </div>
  )
}

export default imgGrid
