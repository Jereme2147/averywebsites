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

const GatsDiv = () => {
  
    return (
      <div className={style.div}>
        <h2>GatsbyJS</h2>
        <SmallImageSVG
          path={{
            title: Variables.gatsby,
            alt: "gatsby logo",
            style: picStyle.image,
            containerStyle: picStyle.imageContainer,
          }}
        />
        <h3>-Fast in every way that matters-</h3>
        <p>
          "Gatsby is a free and open source framework based on React that helps
          developers build blazing fast websites and apps.""
        </p>
        <SmallImage
          path={{
            title: Variables.gatsbywp,
            alt: "gatsby description",
            style: picStyle.image2,
            containerStyle: picStyle.imageContainer2,
          }}
        />
      </div>
    )
}

export default GatsDiv