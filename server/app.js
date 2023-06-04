const express = require('express')
const app = express()
const playerRoutes = require('./routes/player.route')
const PORT = 3000

app.use('/player', playerRoutes)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`)
})
