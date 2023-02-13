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
    </>
  )
}

export default Home
