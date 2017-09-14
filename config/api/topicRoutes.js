const express = require('express')

const router = express.Router()
const topics = require('../../app/controllers/topics')

module.exports = router

router.param('topicId', topics.load)

router.get('/topics', topics.index)
router.get('/topics/:topicId', topics.show)

router.use(function (err, req, res, next) {
  // if id problem use 404
  if (err.message &&
    (~err.message.indexOf('not found') ||
    (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next()
  }

  console.error(err.stack)

  res.status(500).json({
    message: 'internal server error',
    error: err.stack
  })

  router.use(function (req, res) {
    const payload = {
      url: req.originalUrl,
      error: 'Not found'
    }
    return res.status(404).json(payload)
  })
})
