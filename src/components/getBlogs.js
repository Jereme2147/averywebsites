import React from "react"
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import style from "../style/getBlogs.module.scss"

const GetBlogs = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___number, order: DESC }) {
          nodes {
            frontmatter {
              title
              technology
              section
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                  }
                }
              }
              cover_image {
                childImageSharp {
                  fluid(maxWidth: 300, webpQuality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                  }
                }
              }
            }
            excerpt(pruneLength: 50)
            id
            fields {
              slug
            }
          }
        }
      }
    `)
   
    return (
      <div className={style.container}>
        <h2 className={style.title}>Projects and Blog Posts</h2>
        {data.allMarkdownRemark.nodes.map(node => {
          return (
            <Link
              className={style.link}
              key={node.id}
              to={`/blog/${node.fields.slug}`}
            >
              <h2 className={style.h2}>{node.frontmatter.title}</h2>
              <div className={style.imageContainer}>
                <Img
                  className={style.image}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </div>

              <div className={style.meta}>
                <h3 className={style.h3}>{node.frontmatter.technology}</h3>
                <p className={style.p}>{node.excerpt}</p>
              </div>
            </Link>
          )
        })}

      </div>
    )
}

export default GetBlogs