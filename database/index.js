const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deploy:<password>@cluster0-vphbb.gcp.mongodb.net/test?retryWrites=true&w=majority', { useMongoClient: true })

module.exports = mongoose