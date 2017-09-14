const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true
  },
  sentences: {
    type: [String],
    default: '',
    trim: true
  }
})

mongoose.model('Topic', TopicSchema)
