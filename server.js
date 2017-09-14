const express = require('express')
const connect = require('./config/db/connect')

const port = process.env.PORT || 4000
const app = express()

module.exports = app

// config app and routes
require('./config/express')(app)

connect()
  .then(db => {
    db.on('error', console.log)
    listen()
  })
  .catch((err) => {
    console.log('Error connecting to mongo')
    console.log(err)
  })

function listen () {
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log(`Listening on port ${port}`)
}
