const mongoose = require('mongoose')
const Topic = mongoose.model('Topic')

module.exports = {
  load: (req, res, next, id) => {
    Topic.findOne({_id: id})
    .then(topic => {
      req.topic = topic
      if (!req.topic) return next(new Error('Topic not found'))
      next()
    })
    .catch(err => next(err))
  },
  index: (req, res, next) => {
    Topic.find({})
    .then(topic => res.json(topic))
    .catch(err => next(err))
  },
  show: (req, res) => {
    res.json(req.topic)
  }
}
