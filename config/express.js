const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./') // config.root = recall-api

const env = process.env.NODE_ENV || 'development'

// configure middleware

module.exports = function expressConfig (app) {
  // cors needed to allow front-end to access api
  app.use(cors({
    origin: ['http://localhost:3000', 'https://jessamarie.github.io/recall/', 'https://jessamarie.github.io'], // * (wildcard) permits any origin
    optionsSuccessStatus: 200,
    credentials: true // pass the Access-Control-Allow-Credentials CORS header
  }))

  // Don't log during tests
  if (env !== 'test') app.use(morgan('dev'))

  // will be needed later when all of CRUD
  // is fully supported
  app.use(bodyParser.json())
}
