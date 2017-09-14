const mongoose = require('mongoose')
const connect = require('./connect')
const seedTopics = require('./seedTopics')

const Topic = mongoose.model('Topic')

connect()
.then(_ => Topic.remove({}))
.then(_ => Topic.collection.insert(seedTopics))
.then(topics => {
  console.log(topics)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
