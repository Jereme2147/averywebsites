import React from "react"
import { Link } from "gatsby"
import Banner from "../assets/banner.js"
import Layout from "../components/layout.js"
import Image from "../components/image"
import SEO from "../components/seo"
import Variables from "../components/variables"
import Tech from '../components/tech.js'
import LandingBlogPost from '../components/landingBlogPost.js'
import About from '../components/about.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner banner={Variables.landingBanner} />
    <Tech />
    <About />
    <LandingBlogPost />
  </Layout> 
)

export default IndexPage
 