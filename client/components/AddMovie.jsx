import React, { useState, useEffect } from 'react'

import { searchMovieApi } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('')
  const [imdbResults, setImdbResults] = useState([])

  async function handleSearch(e) {
    e.preventDefault()
    const movieList = await searchMovieApi(movieSearch)
    setImdbResults(movieList)
    setMovieSearch('')
  }

  function handleTyping(e) {
    setMovieSearch(e.target.value)
  }

  function handleAdd(movie) {
    console.log('adding', movie)
  }

  return (
    <>
      <div>
        <h1 className="add-title">AddMovie</h1>
      </div>

      <div>
        <form onSubmit={handleSearch}>
          <label htmlFor="search">New Movie:</label>
          <input
            type="text"
            id="search"
            onChange={handleTyping}
            value={movieSearch}
          ></input>
          <button>Search</button>
        </form>
      </div>

      <div className="card-container">
        {imdbResults.map((movie) => {
          return (
            <div className="card">
              {!movie.image ? (
                <img
                  src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                  alt="no image"
                />
              ) : (
                <img src={movie.image} alt="movie poster" />
              )}
              <p>{movie.title}</p>
              <button
                onClick={() => {
                  handleAdd(movie)
                }}
              >
                Add Movie
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AddMovie
