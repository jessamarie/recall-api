const join = require('path').join

const apiRoutes = require('./api/topicRoutes')
// add other apiRoutes here

const config = require('./')

module.exports = function routesConfig (app) {
  app.use('/api', apiRoutes)
}
