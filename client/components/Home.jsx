import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getMoviesApi } from '../apis/moviesApi'

function Home() {
  const movies = useSelector((store) => store.movies)

  useEffect(async () => {
    let movieArr = await getMoviesApi()
    console.log(movieArr)
  }, [])

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div className="card-container">
        {movies.map((movie) => {
          return (
            <>
              <div className="card">
                <img src={movie.img} alt="movie poster" />
                <p>{movie.title}</p>
                {movie.watch ? <p>Watched</p> : <p>Not Watched</p>}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home
