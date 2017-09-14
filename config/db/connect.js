const fs = require('fs')
const join = require('path').join
const mongoose = require('mongoose')
const config = require('../')

mongoose.promise = global.promise

const modelsPath = join(config.root, 'app/models')

// load models dynamically
// Load models
fs.readdirSync(modelsPath)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(modelsPath, file)))

module.exports = connect

function connect () {
  const options = {
    useMongoClient: true,
    keepAlive: 1
  }
  return mongoose.connect(config.db, options)
}
