const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Igreja', { useMongoClient: true })

module.exports = mongoose