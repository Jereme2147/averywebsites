import React from "react"
import style from '../style/priorities.module.scss'
import SmallImage from '../components/smallimage.js'
import Variables from '../components/variables.js'


const Priorities = () => {
const imageStyle = {
    container: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%'
    }
}
    return (
      <div className={style.container}>
        <div className={style.imageDiv}>
          <SmallImage
            path={{
              title: Variables.phone,
              alt: "iphone",
              style: imageStyle.image,
              containerStyle: imageStyle.container,
            }}
          />
        </div>
        <div className={style.breakdown}>
          <h3>Every site is built with these priorities:</h3>
          <ul>
            <li>Mobile First Design</li>
            {/* <ul className={style.ul}>
                <li>The first interaction with your business is almost always from a mobile device.</li>
            </ul> */}
            <li>Speed</li>
                {/* <ul className={style.ul}>
                    <li>
                        Sites that don't load fast are quickly passed by.
                    </li>
                </ul> */}
            <li>Structurally Perfect</li>
                {/* <ul className={style.ul}>
                    <li>Google prioritizes well built sites with no errors.</li>
                </ul> */}
          </ul>
          <h3>"Content gets clicks, clicks get ranking, ranking gets customers"</h3>
        </div>
      </div>
    )
}
export default Priorities