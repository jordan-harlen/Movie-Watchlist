const conn = require('./connection')

function getAllMovies(db = conn) {
  return db('movies')
}

function deleteMovie(id, db = conn) {
  return db('movies').where('id', id).del()
}

function addMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

module.exports = {
  getAllMovies,
  deleteMovie,
  addMovie,
}
