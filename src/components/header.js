import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from '../style/header.module.scss'
import Logo from '../assets/logo.js'
import Hamburger from '../assets/hamburger.js'

const Header = ({ siteTitle }) => (
  <header className={style.nav}>
    <Logo />
    <div className={style.h1Container}>
      <h1 className={style.h1}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div className={style.hamburger}>
      <Hamburger />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
