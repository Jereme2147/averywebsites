import React from 'react'
import { Link } from 'gatsby'
import style from '../style/menu.module.scss'

const Menu = () => {
    return (
      <div className={style.inner}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogPage">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#pricing">Pricing</a>
          </li>
          <li>
            <a href="http://www.jeremedaniels.com/">Developer Page</a>
          </li>
        </ul>
      </div>
    )
}

export default Menu;