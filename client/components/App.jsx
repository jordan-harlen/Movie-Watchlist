import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
