import request from 'superagent'

export function getMoviesApi() {
  return request
    .get('/api/v1/movies')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('getMoviesApi', err.message)
    })
}

export function addMovieApi(newMovie) {
  return request.post('/api/v1/movies').send(newMovie)
}

export function deleteMovieApi(movieId) {
  return request
    .delete(`/api/v1/movies/${movieId}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('deleteMovieApi', err.message)
    })
}
