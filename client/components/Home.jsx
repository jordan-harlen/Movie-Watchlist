import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMoviesThunk } from '../actions/moviesActions'
import { deleteMovieApi } from '../apis/moviesApi'

function Home() {
  const movies = useSelector((store) => store.movies)
  const dispatch = useDispatch()

  const [deletedMovie, setDeletedMovie] = useState(null)

  useEffect(async () => {
    let moviesList = await getMoviesThunk()
    dispatch(moviesList)
  }, [deletedMovie])

  function handleDelete(movieId) {
    deleteMovieApi(movieId)
      .then((res) => {
        setDeletedMovie(res)
      })
      .catch((err) => {
        console.log('handleDelete in Home.jsx', err.message)
      })
  }

  return (
    <>
      <div className="home-title">
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
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(movie.id)
                  }}
                >
                  Delete
                </button>
                {movie.watched ? (
                  <button>Not watched?</button>
                ) : (
                  <button>Watched?</button>
                )}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home
