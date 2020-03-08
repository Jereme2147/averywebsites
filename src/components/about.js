import React from 'react'
import Priorities from '../components/priorities.js'
import WeDo from '../components/weDo.js'
import Pricing from '../components/pricing.js'
import style from '../style/about.module.scss'

const About = () => {
    return (
        <div className={style.container}id="services">
            <h2 className={style.h2}>Services Offered</h2>
            <Priorities />
            <WeDo />
            <Pricing />

        </div>
    )
}

export default About