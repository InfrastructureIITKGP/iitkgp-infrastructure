import React from "react"
import Layout from "../screens/Hero/layout"
import OnGoingProject from "../screens/OnGoingProjects/Ongoing_projects"
import data from "../Data/Ongoing_projects.data"

const OnGoingProjects = data => {
  return (
    <div>
      <Layout>
        <OnGoingProject />
      </Layout>
    </div>
  )
}
export default OnGoingProjects
