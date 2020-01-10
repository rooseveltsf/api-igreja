const mongoose = require('../../../database/index')

// const Schema = mongoose.Schema()

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    duvida: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User