const conn = require('./connection')

function getAllMovies(db = conn) {
  return db('movies')
}

function deleteMovie(id, db = conn) {
  return db('movies').where('id', id).del()
}

module.exports = {
  getAllMovies,
  deleteMovie,
}
