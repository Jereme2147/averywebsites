import React from 'react'
import style from '../style/weDo.module.scss'
import SmallImage from "../components/smallimage.js"
import Variables from "../components/variables.js"

const WeDo = () => {
    const imageStyle = {
      container: {
        width: "100%",
        height: "100%",
      },
      image: {
        width: "100%",
        height: "100%",
      },
    }
    return (
      <div className={style.container}>
        <h2>What I do</h2>
        <div className={style.imageDiv}>
          <SmallImage
            path={{
              title: Variables.speed,
              alt: "lighthouse speed test",
              style: imageStyle.image,
              containerStyle: imageStyle.container,
            }}
          />
        </div>
        <div className={style.inner}>
          <div className={style.block}>
            <h4>Comprehensive project services:</h4>
            {/* <h4>Project Planning</h4> */}
            <p>Tech | Design | Development</p>
          </div>

          <div className={style.block}>
            <h3>Post Project Completion:</h3>
            <p>Social Media Campaign</p>
            <p>Analytics | Maintenance</p>
          </div>
        </div>
      </div>
    )
}

export default WeDo