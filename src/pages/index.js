import React from "react"
import Layout from "../components/layout";
import Home from "../sections/Home";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";

export default function SinglePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Portfolio />
    </Layout>
  )
}
