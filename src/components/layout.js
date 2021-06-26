
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import style from "../style/layout.module.scss"
import Footer from "../components/footer.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;700&family=Alatsi:wght@200;400;700&family=Rasa:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Header>
      <div className={style.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
