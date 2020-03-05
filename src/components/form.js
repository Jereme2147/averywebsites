import React from 'react'
import style from '../style/form.module.scss'

const Form = () => {
    return (
      <form
        className={style.form}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>
            <input type="text" name="name" placeholder="Your name here" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message" placeholder="Message"></textarea>
          </label>
        </p>
        <p style={{display: 'flex', justifyContent: 'center'}}>
          <button type="submit">Send</button>
        </p>
      </form>
    )
}

export default Form