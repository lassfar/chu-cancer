import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/layouts/layout.js"
import SEO from "components/layouts/seo.js"
import Home from "components/home/home.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Home />
  </Layout>
)

export default IndexPage
