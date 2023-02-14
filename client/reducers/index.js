import { combineReducers } from 'redux'

import { movieReducer } from './moviesReducer'

// import stuff from './stuff'

export default combineReducers({
  // stuff
  movies: movieReducer,
})
