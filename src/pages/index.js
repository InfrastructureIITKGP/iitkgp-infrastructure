import * as React from "react"
import "./index.css"
import Home from "../screens/Home/Home"
import HomeLayout from "../screens/Hero/home-layout"

const IndexPage = () => {
  return (
    <div>
      <div className="home">
        <HomeLayout>
          <Home />
        </HomeLayout>
      </div>
    </div>
  )
}

export default IndexPage
