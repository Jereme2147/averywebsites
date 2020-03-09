import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import LandingBlogStyle from '../style/landingBlogPost.module.scss'

const LandingBlogPost = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(
          limit: 1
          sort: { order: DESC, fields: frontmatter___number }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                section
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    return (
      <div className={LandingBlogStyle.container}>
        <Link
          to={`/blog/${data.allMarkdownRemark.edges[0].node.fields.slug}`}
          className={LandingBlogStyle.inner}
        >
          <h2 className={LandingBlogStyle.h2}>Latest Post</h2>
          <div className={LandingBlogStyle.meta}>
            <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
            <h3>|</h3>
            <h3>Type: {data.allMarkdownRemark.edges[0].node.frontmatter.section}
            </h3>
          </div>
          <Img 
            fluid={data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid}
            className={LandingBlogStyle.img}
            alt={"blog post image"}
          />
        </Link>
      </div>
    )
}

export default LandingBlogPost