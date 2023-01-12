const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    content: String,
    punch_line: String
})

module.exports = mongoose.model('Joke', JokeSchema)
