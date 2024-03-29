import React from 'react'
import style from '../style/pricing.module.scss'

const Pricing = () => {
    return (
      <div className={style.container} id="pricing">
        <h2>Pricing</h2>
        <div className={style.inner}>
          <div className={style.block}>
            <h4>Packages for all budgets:</h4>
            {/* <h4>Project Planning</h4> */}
            <p>
              <span>-Most Popular-</span>
            </p>
            <ul>
              <li>$150 Per Month</li>
              {/* <li>$500 Down</li> */}
              <li>5 Page Site</li>
              <li>24/7 Customer Service</li>
              <li>Unlimited Edits</li>
            </ul>
          </div>

          <div className={style.block}>
            <h4>Includes</h4>
            <ul>
              <li>Fast Custom Website</li>
              <li>Domain Name</li>
              <li>Web Hosting</li>
              <li>Optional blog and social media management availible</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Pricing