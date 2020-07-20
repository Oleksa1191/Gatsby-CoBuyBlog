import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const About = () => {


  return (
    <Layout>
      About page
      <SEO title='About' />
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About