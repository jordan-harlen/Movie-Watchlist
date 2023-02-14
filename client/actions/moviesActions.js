import { getMoviesApi } from '../apis/moviesApi'

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
      console.log('thunk', movieArr)
      dispatch(saveMovies(movieArr))
    } catch (err) {
      console.error(err.message)
    }
  }
}
