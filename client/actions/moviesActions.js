import { addMovieApi, getMoviesApi } from '../apis/moviesApi'

//Vars

export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

//Action Creators

function saveMovies(movieArr) {
  return {
    type: SAVE_MOVIES,
    payload: movieArr,
  }
}

function saveOneMovie(movieObj) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: movieObj,
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

    const movieFromServer = await addMovieApi(newMovie)
    dispatch(saveOneMovie(movieFromServer))
  }
}
