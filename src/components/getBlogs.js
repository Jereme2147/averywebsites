import React from "react"
import Img from "../components/image"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"


const GetBlogs = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___number, order: ASC }) {
          nodes {
            frontmatter {
              title
              technology
              section
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                  }
                }
              }
            }
            excerpt(pruneLength: 10)
            id
            fields {
              slug
            }
          }
        }
      }
    `)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data.allMarkdownRemark.nodes.map(node => {
          return (
            <div >
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                {/* <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                /> */}
              </Link>
            </div>
          )
        })}
        {console.log(data)}
      </div>
    )
}

export default GetBlogs