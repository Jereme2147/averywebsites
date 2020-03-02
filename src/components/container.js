import React from "react"
import style from "../style/container.module.scss"

const Container = ( {children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container 