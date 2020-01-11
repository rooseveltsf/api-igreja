const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deploy:deploy007@cluster0-vphbb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true})

module.exports = mongoose