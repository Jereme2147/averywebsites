import React from "react"
import style from '../style/gatsdiv.module.scss'
import SmallImageSVG from './smallimageSVG.js'
import Variables from './variables.js'
import SmallImage from './smallimage.js'

const picStyle = {
  imageContainer: {
    width: "25%",
    maxWidth: "250px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer2: {
    width: "100%",
  },
  image2: {
    width: "100%",
    maxWidth: "400px",
    alignSelf: "center",
    margin: "auto",
  },
}

const HtmlCss = () => {
    return (
      <div className={style.div}>
        <h2>HTML CSS JavaScript</h2>
        <SmallImageSVG
          path={{
            title: Variables.htmlCssJs,
            alt: "html css js logos",
            style: picStyle.image,
            containerStyle: picStyle.imageContainer,
          }}
        />
        <h3>-Sometimes the basics are best-</h3>
        <p>
          Nothing is faster than a static site built with from foundations of 
          web development. 
        </p>
        <SmallImage
          path={{
            title: Variables.html2,
            alt: "html description",
            style: picStyle.image2,
            containerStyle: picStyle.imageContainer2,
          }}
        />
      </div>
    )
}

export default HtmlCss