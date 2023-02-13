import request from 'superagent'

export async function getMoviesApi() {
  return request.get('/api/v1/movies').then((res) => {
    console.log(res.body)
    return res.body
  })
}
