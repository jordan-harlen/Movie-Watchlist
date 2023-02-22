const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', async (req, res) => {
  try {
    const moviesArr = await db.getAllMovies()
    res.json(moviesArr)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    await db.addMovie(req.body)
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500).json({ msg: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id
    let deletedMovie = await db.deleteMovie(id)
    res.json(deletedMovie)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router
