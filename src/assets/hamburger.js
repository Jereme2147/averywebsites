//obviously hamburger code.

import React from 'react'
import hamburgerStyles from '../style/hamburger.module.scss'
import style from '../style/menu.module.scss'
import Menu from './menu.js'

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerClass: [hamburgerStyles.hamburger, hamburgerStyles.minus],
      isShowing: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    if (this.state.burgerClass.length === 2 ){
        this.setState({
          burgerClass: [
            hamburgerStyles.hamburger,
            hamburgerStyles.minus,
            hamburgerStyles.isActive,
          ],
          isShowing: 1,
        })
    } else {
        this.setState({
          burgerClass: [
            hamburgerStyles.hamburger,
            hamburgerStyles.minus,
          ],
              isShowing: false,
        })
    }
  }
  
  render() {
    return (
      <div>
        <button
          className={this.state.burgerClass.join(" ")}
          type="button"
          onClick={this.handleClick}
          aria-label="Menu Button"
        >
          <span className={hamburgerStyles.hamburgerBox}>
            <span className={hamburgerStyles.hamburgerInner}></span>
          </span>
        </button>
        <div
          style={{ display: this.state.isShowing ? "block" : "none" }}
          className={style.menu}
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
        >
          <Menu />
        </div>
      </div>
    )
  }
} 

export default Hamburger