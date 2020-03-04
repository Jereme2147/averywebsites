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
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Developer Page</Link>
          </li>
        </ul>
      </div>
    )
}

export default Menu;