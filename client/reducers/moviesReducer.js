import { SAVE_MOVIES } from '../actions/moviesActions'

export function movieReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_MOVIES:
      return payload
    default:
      return state
  }
}
