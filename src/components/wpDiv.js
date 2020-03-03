import React from "react"
import style from '../style/gatsdiv.module.scss'
import SmallImageSVG from './smallimageSVG.js'
import Variables from './variables.js'
import SmallImage from './smallimage.js'

const getSize = () => {
    var x = window.matchMedia(`${Variables.small}`)
    if(x.matches) {
        return (
            true
        )
    } else {
        return (
            false
        )
    }
}
const picStyle = {
  imageContainer: {
    width: `${getSize() ? "100px" : "200px"}`,
    height: `${getSize() ? "100px" : "200px"}`,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer2: {
    // width: `${getSize() ? "100%" : "550px"}`,
    width: '100%',

  },
  image2: {
    // width: "100%",
    width: `${getSize() ? '100%' : '50%'}`,
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