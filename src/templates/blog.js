import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import style from "../style/blog.module.scss"
import  Img  from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
         query($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             frontmatter {
               cover_image {
                 childImageSharp {
                   fluid {
                     ...GatsbyImageSharpFluid_withWebp
                     originalName
                   }
                   id
                 }
               }
               featuredImage {
                 childImageSharp {
                   fluid {
                     ...GatsbyImageSharpFluid_withWebp
                     originalName
                   }
                   id
                 }
               }
               section
               title
               technology
             }
             html
             id
           }
         }
       `

const Blog = props => {
  return (
    <Layout>
      <SEO title={`${props.data.markdownRemark.frontmatter.title}`}/>
      <div className={style.container}>
        <div className={style.inner}>
          <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          <h3>{props.data.markdownRemark.frontmatter.technology}</h3>
          <Img
            fluid={
              props.data.markdownRemark.frontmatter.featuredImage
                .childImageSharp.fluid
            }
            alt={`${props.data.markdownRemark.frontmatter.featuredImage.id}`}
            className={style.imgOne}
          />
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
          <Img
            fluid={
              props.data.markdownRemark.frontmatter.cover_image.childImageSharp
                .fluid
            }
            alt={`${props.data.markdownRemark.frontmatter.cover_image.id}`}
            className={style.imgTwo}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
