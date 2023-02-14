import request from 'superagent'

export async function getMoviesApi() {
  try {
    return request.get('/api/v1/movies').then((res) => {
      return res.body
    })
  } catch (err) {
    console.error(err.message)
  }
}
