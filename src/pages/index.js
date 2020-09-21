import React from "react"
import Layout from "../components/layout"
import Home from "../pages/home"
import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="Nitch Media Home Page" />
      <Home />
    </Layout>
  )
}

export default Index