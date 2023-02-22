import { SAVE_MOVIES, SAVE_ONE_MOVIE } from '../actions/moviesActions'

export function movieReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_MOVIES:
      return payload
    case SAVE_ONE_MOVIE:
      return [...state, payload]
    default:
      return state
  }
}
