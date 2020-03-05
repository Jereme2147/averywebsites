import React from "react"
// import { Link } from "gatsby"
import Banner from "../assets/banner.js"
import Layout from "../components/layout.js"
// import Image from "../components/image"
import SEO from "../components/seo"
import Variables from "../components/variables"
import GetBlogs from "../components/getBlogs.js"



const BlogPage = () => {
    return (
      <Layout>
        <SEO title="Blog Page" />
        <Banner banner={Variables.blogPage} />
        <GetBlogs />
      </Layout>
    )
}

export default BlogPage 