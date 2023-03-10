const express = require('express')
const path = require('path')

const server = express()

const movieRoutes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/movies', movieRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
