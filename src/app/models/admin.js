const mongoose = require('../../../database/index')
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

adminSchema.pre('save', async next => {
    const hash = await bcrypt.hash( this.senha, 10)
    this.senha = hash

    next()
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin