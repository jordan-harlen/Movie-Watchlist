import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <div className="nav">
        {isHome ? (
          <Link to="/add">
            <h3>Add Movie</h3>
          </Link>
        ) : (
          <Link to="/">
            <h3>Home</h3>
          </Link>
        )}
      </div>
    </>
  )
}

export default Nav
