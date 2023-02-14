import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMoviesThunk } from '../actions/moviesActions'

function Home() {
  const movies = useSelector((store) => store.movies)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getMoviesThunk())
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
