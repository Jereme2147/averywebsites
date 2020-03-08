import React from "react"
import style from '../style/gatsdiv.module.scss'
import SmallImageSVG from './smallimageSVG.js'
import Variables from './variables.js'
import SmallImage from './smallimage.js'

const picStyle = {
  imageContainer: {
    width: '25%',
    maxWidth: '250px',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer2: {
    width: '100%',

  },
  image2: {
    width: '100%',
    maxWidth: '400px',
    alignSelf: 'center',
    margin: 'auto'
  },
}

const WpDiv = () => {
    return (
      <div className={style.div}>
        <h2>WordPress</h2>
        <SmallImageSVG
          path={{
            title: Variables.wplogo,
            alt: "wordpress logo",
            style: picStyle.image,
            containerStyle: picStyle.imageContainer,
          }}
        />
        <h3>-The worlds favorite platform-</h3>
        <p>
          "WordPress powers more than 35% of the web, from brand new bloggers to the 
          world's biggest brands"
        </p>
        <SmallImage
          path={{
            title: Variables.wpDescription,
            alt: "gatsby description",
            style: picStyle.image2,
            containerStyle: picStyle.imageContainer2,
          }}
        />
      </div>
    )
}

export default WpDiv