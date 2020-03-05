import React from "react"
import { Link } from "gatsby"
import Banner from "../assets/banner.js"
import Layout from "../components/layout.js"
import Image from "../components/image"
import SEO from "../components/seo"
import Variables from "../components/variables"
import Form from "../components/form.js"
import style from "../style/contact.module.scss"
import SmallImageSVG from '../components/smallimageSVG.js'

const Contact = () => {
    return (
      <Layout>
        <SEO title="Contact" />
        <Banner banner={Variables.contactBanner} />
        <div className={style.container}>
          <h1>Contact</h1>
          <div className={style.social}>
            <a href="#">
              <SmallImageSVG
                path={{
                  title: Variables.facebook,
                  alt: "facebook logo",
                  style: { width: "75px", height: "75px" },
                  containerStyle: { width: "75px", height: "75px" },
                }}
              />
            </a>
            <a href="#">
              <SmallImageSVG
                path={{
                  title: Variables.github,
                  alt: "github logo",
                  style: { width: "75px", height: "75px" },
                  containerStyle: { width: "75px", height: "75px" },
                }}
              />
            </a>
            <a href="mailto:averywebsites@jeremedaniels.com">
              <SmallImageSVG
                path={{
                  title: Variables.email,
                  alt: "email logo",
                  style: { width: "75px", height: "75px" },
                  containerStyle: { width: "75px", height: "75px" },
                }}
              />
            </a>
          </div>
          <Form />
        </div>
      </Layout>
    )
}

export default Contact