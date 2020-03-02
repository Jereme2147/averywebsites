import React from 'react'
import style from '../style/techDiv.module.scss'

const TechDiv = ( { children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default TechDiv