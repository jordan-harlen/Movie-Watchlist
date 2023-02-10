import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/add">
          <h3>Add Movie</h3>
        </Link>
      </div>
    </>
  )
}

export default Nav
