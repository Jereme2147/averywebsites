import React from 'react'
import style from '../style/footer.module.scss'
import { Link } from 'gatsby'
import Logo from '../assets/logo.js'


const Footer = () => {
    return (
      <footer className={style.container}>
        <div className={style.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={style.other}>
            <Logo />
          <p>
            Avery Websites © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
          <a href="mailto:#">averywebsites@jeremedaniels.com</a>
        </div>
      </footer>
    )
}

export default Footer