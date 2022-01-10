import React from "react"
import Banner from "../assets/banner.js"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Variables from "../components/variables"
import GetBlogs from "../components/getBlogs.js"



const BlogPage = () => {
    return (
      <Layout>
        <SEO title="Blog Page" />
        <Banner banner={Variables.landingBanner} />
        <GetBlogs />
      </Layout>
    )
}

export default BlogPage 