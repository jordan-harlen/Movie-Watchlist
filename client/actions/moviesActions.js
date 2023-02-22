import { addMovieApi, getMoviesApi } from '../apis/moviesApi'

//Vars

export const SAVE_MOVIES = 'SAVE_MOVIES'

//Action Creators

function saveMovies(movieArr) {
  return {
    type: SAVE_MOVIES,
    payload: movieArr,
  }
}

//Thunks

export function getMoviesThunk() {
  return async (dispatch) => {
    try {
      let movieArr = await getMoviesApi()
      dispatch(saveMovies(movieArr))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function addMovie(movie) {
  return async (dispatch) => {
    const newMovie = {
      title: movie.title,
      img: movie.image,
      imdb_id: movie.id,
    }

    await addMovieApi(newMovie)
  }
}
