import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
    <section id="error">
      <div className="error__wrapper">
        <h1>
          4 <img src="https://c.tenor.com/Nl45qRGQk_0AAAAi/ghost-white.gif" />{" "}
          4
        </h1>
        <p className="frown-it" data-splitting>
          ERROR
        </p>
        <Link to='/'>Back to home</Link>
      </div>
    </section>
  </>
  )
}

export default Error
