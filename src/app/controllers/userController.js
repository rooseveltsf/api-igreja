const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        const duvida = await User.create(req.body)
        res.send(duvida).status(200)
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao enviar este post' })
    }
})

router.get('/users', async (req, res) => {
    try {
        const duvidas = await User.find()

        res.send(duvidas)
    } catch (err) {
        res.status(400).send({ error: 'Falha ao listar as informações' })
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)

        res.send('Post deletado com sucesso')
    } catch (err) {
        res.status(400).send({ error: 'Falha ao excluir este post' })
    }
})

module.exports = router