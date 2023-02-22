import request from 'superagent'

import key from '../../server/apiKey'

export function searchMovieApi(movieName) {
  return request
    .get(`https://imdb-api.com/en/API/SearchMovie/${key}/${movieName}`)
    .then((res) => {
      return res.body.results
    })
    .catch((err) => {
      console.log('searchMovieApi', err.message)
    })
}
