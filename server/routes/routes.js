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
    const idArr = await db.addMovie(req.body)

    const newObj = {
      id: idArr[0],
      ...req.body,
      watched: false,
    }

    res.json(newObj)
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
